import AdminLayout from "@/components/Admin/AdminLayout";
import LeadsPage from "@/components/Admin/AdminPages/LeadsPage";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <LeadsPage />
    </AdminLayout>
  );
}
