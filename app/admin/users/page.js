"use client";
import AdminLayout from "@/components/Admin/AdminLayout";
import ManageUsers from "@/components/Admin/AdminPages/ManageUsers";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { del, get, post } from "@/utils/axios";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [getLoading, setLoading] = useState(true);
  const router = useRouter();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirm) return;

    try {
      await del(`${process.env.BASE_URL}/api/login?id=${id}`);
      toast.success("User deleted successfully", {
        autoClose: 1000,
      });
      getData();
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user", {
        autoClose: 1000,
      });
    }
  };

  const getData = async () => {
    try {
      const response = await get(`${process.env.BASE_URL}/api/login`);
      setData(response.data.users);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.data.error || "An error occurred", {
        autoClose: 1000,
      });
    }
  };

  const handleSubmit = async () => {
    if (!email || !password || !name) {
      toast.error("Please fill all fields!", {
        autoClose: 1000,
      });
      return;
    }
    if (!email.endsWith("@gmail.com")) {
      toast.error("Please add @gmail.com!", {
        autoClose: 1000,
      });
      return;
    }
    toast.info("Please Wait...", {
      autoClose: 1000,
    });
    handleClose();
    try {
      const postData = {
        email,
        password,
        name,
      };
      await post(`${process.env.BASE_URL}/api/signup`, postData);
      toast.success("User Created Successfully!", {
        autoClose: 1000,
      });
      getData();
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("error", error);
      toast.error(error.data.error, {
        autoClose: 1000,
      });
    }
  };
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      router.push("/");
      return;
    }

    const user = JSON.parse(userInfo);
    if (user.user.Role !== "Admin") {
      router.push("/");
      return;
    }
    setLoading(false);
    getData();
  }, [router]);

  return (
    <AdminLayout>
      <ManageUsers
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        data={data}
        name={name}
        open={open}
        setName={setName}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        loading={loading}
        handleTogglePasswordVisibility={handleTogglePasswordVisibility}
        handleOpen={handleOpen}
        handleClose={handleClose}
        deleteUser={deleteUser}
        getData={getData}
        handleSubmit={handleSubmit}
      />
    </AdminLayout>
  );
}
