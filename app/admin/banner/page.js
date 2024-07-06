import AdminLayout from "@/components/Admin/AdminLayout";
import BannerPage from "@/components/Admin/AdminPages/BannerPage";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <BannerPage />
    </AdminLayout>
  );
}
