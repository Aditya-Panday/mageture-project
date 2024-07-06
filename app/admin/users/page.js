import AdminLayout from "@/components/Admin/AdminLayout";
import ManageUsers from "@/components/Admin/AdminPages/ManageUsers";
import React from "react";

export default function page() {
  return (
    <AdminLayout>
      <ManageUsers />
    </AdminLayout>
  );
}
