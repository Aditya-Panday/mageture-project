"use client";
import Events from "@/components/Events";
import MainLayout from "@/components/MainLayout";
import React, { useState, useEffect } from "react";
import { get } from "@/utils/axios";

export default function Page() {
  const [data, setData] = useState([]);
  const [getLoading, setGetLoading] = useState(false);

  const getData = async () => {
    setGetLoading(true);
    try {
      const response = await get("http://localhost:3000/api/podcast");
      setData(response.data);
      console.log("Podcast", response.data);
      setGetLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <MainLayout>
      <Events data={data} getLoading={getLoading}></Events>
    </MainLayout>
  );
}
