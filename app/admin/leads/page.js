"use client";
import AdminLayout from "@/components/Admin/AdminLayout";
import LeadsPage from "@/components/Admin/AdminPages/LeadsPage";
import { del, get } from "@/utils/axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await get("http://localhost:3000/api/leads");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.error, {
        autoClose: 1000,
      });
    }
  };
  const deleteLead = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this lead?"
    );
    if (!confirm) return;

    console.log("deleteUser", id);
    try {
      await del(`http://localhost:3000/api/leads?id=${id}`);
      getData();
      toast.success("Lead Deleted Successfully!", {
        autoClose: 1200,
      });
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error(error.error, {
        autoClose: 1200,
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <AdminLayout>
      <LeadsPage data={data} deleteLead={deleteLead} />
    </AdminLayout>
  );
}
