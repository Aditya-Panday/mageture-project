"use client";
import AdminLayout from "@/components/Admin/AdminLayout";
import BlogsPage from "@/components/Admin/AdminPages/BlogsPage";
import { post } from "@/utils/axios";
import { uploadImageToCloudinary } from "@/utils/helper";
import { get } from "mongoose";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setFile("");
    }
  };

  const handleSubmit = async () => {
    if (!file || !description || !title || !link) {
      toast.error("Please fill all the fields!", {
        autoClose: 1500,
      });
      return;
    }
    if (
      !file.type.includes("jpeg") &&
      !file.type.includes("png") &&
      !file.type.includes("jpg")
    ) {
      toast.error("Please select only jpg, jpeg, png format file!", {
        autoClose: 1500,
      });
      return;
    }

    setLoading(true);
    try {
      toast.info("Processing please wait...", {
        autoClose: 1000,
      });
      const imageFile = file;
      const imgurl = await uploadImageToCloudinary(imageFile);

      const postData = {
        description,
        title,
        imgurl,
        link,
      };
      await post("http://localhost:3000/api/podcast", postData);
      toast.success("Podcast Created Successfully", {
        autoClose: 1500,
      });
    } catch (error) {
      if (error) {
        toast.error(error.data.error, {
          autoClose: 2000,
        });
      } else {
        toast.error("Server Error", {
          autoClose: 2000,
        });
      }
    } finally {
      setTitle("");
      setDescription("");
      setLink("");
      setFile("");
      setWork(false);
    }
  };

  const getData = async () => {
    try {
      const response = await get("http://localhost:3000/api/podcast");
      setData(response.data);
      console.log("podcastData", response.data);
    } catch (error) {
      toast.error(error.error, {
        autoClose: 1500,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayout>
      <BlogsPage
        link={link}
        title={title}
        description={description}
        file={file}
        setFile={setFile}
        setTitle={setTitle}
        setDescription={setDescription}
        setLink={setLink}
        handleFileChange={handleFileChange}
        loading={loading}
        handleSubmit={handleSubmit}
        data={data}
      />
    </AdminLayout>
  );
}
