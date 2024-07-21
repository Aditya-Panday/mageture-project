"use client";
import AdminLayout from "@/components/Admin/AdminLayout";
import EventsData from "@/components/Admin/AdminPages/EventsData";
import { del, get, post } from "@/utils/axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    if (!description || !title || !videoUrl) {
      toast.error("Please fill all the fields!", {
        autoClose: 1500,
      });
      return;
    }
    setLoading(true);
    try {
      const postData = {
        description,
        title,
        videoUrl,
      };
      await post("/api/events", postData);
      toast.success("Event Created Successfully", {
        autoClose: 1500,
      });
      getData();
    } catch (error) {
      toast.error("Server Error", {
        autoClose: 2000,
      });
    } finally {
      setTitle("");
      setDescription("");
      setVideoUrl("");
      setLoading(false);
    }
  };

  const getData = async () => {
    setGetLoading(true);
    try {
      const response = await get("/api/events");
      setData(response.data);
      console.log("EventsData", response.data);
    } catch (error) {
      toast.error("Error fetching data", {
        autoClose: 1500,
      });
    } finally {
      setGetLoading(false);
    }
  };

  const deleteEvent = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (!confirm) return;

    try {
      await del(`/api/events?id=${id}`);
      getData();
      toast.success("Event Deleted Successfully!", {
        autoClose: 1200,
      });
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Error deleting event:", {
        autoClose: 1200,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayout>
      <EventsData
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        setVideoUrl={setVideoUrl}
        videoUrl={videoUrl}
        handleSubmit={handleSubmit}
        deleteEvent={deleteEvent}
        loading={loading}
        data={data}
        getLoading={getLoading}
      />
    </AdminLayout>
  );
}
