"use client";
import AdminLayout from "@/components/Admin/AdminLayout";
import LeadsPage from "@/components/Admin/AdminPages/LeadsPage";
import { del, get } from "@/utils/axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await get(`${process.env.BASE_URL}/leads`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error(error.error, {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteLead = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this lead?"
    );
    if (!confirm) return;

    console.log("deleteUser", id);
    try {
      await del(`${process.env.BASE_URL}/leads?id=${id}`);
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
      <LeadsPage data={data} deleteLead={deleteLead} loading={loading} />
    </AdminLayout>
  );
}
