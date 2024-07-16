"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const AdminLayout = ({ children }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const [username, setUsername] = useState("");
  const [side, setSide] = useState(false);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState("user");

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    toast.success("Logged out successfully!");
    router.push("/");
  };

  const handleClick = () => {
    setSide(!side);
  };
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");

    if (!userInfo) {
      router.push("/");
    } else {
      setLoading(false);
      const user = JSON.parse(userInfo);
      setUsername(user.user.name);
      setRole(user.user.Role);
    }
  }, [router]);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      {/* <!-- SIDEBAR --> */}
      <section id="sidebar" className={side ? "hide" : ""}>
        <Link href="/" className="brand tptp">
          <Image
            src="/Avatar1.png"
            className="dash-avt"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>
        <ul className="side-menu top">
          <li
            className={currentPath.includes("/admin/dashboard") ? "active" : ""}
          >
            <Tooltip title="Dashboard" placement="right">
              <Link href="/admin/dashboard" className="tptp">
                <DashboardIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "Dashboard"}</span>
              </Link>
            </Tooltip>
          </li>

          <li className={currentPath.includes("/admin/blogs") ? "active" : ""}>
            <Tooltip title="Blogs" placement="right">
              <Link href="/admin/blogs" className="tptp">
                <DescriptionIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "Podcast"}</span>
              </Link>
            </Tooltip>
          </li>
          <li className={currentPath.includes("/admin/leads") ? "active" : ""}>
            <Tooltip title="Leads" placement="right">
              <Link href="/admin/leads" className="tptp">
                <LocalLibraryIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "LeadsEnquiry"}</span>
              </Link>
            </Tooltip>
          </li>
          {role.toLowerCase() === "admin" && (
            <li
              className={currentPath.includes("/admin/users") ? "active" : ""}
            >
              <Tooltip title="Manage Users" placement="right">
                <Link href="/admin/users" className="tptp">
                  <PeopleAltIcon className="ic-edit" />
                  <span className="text mx-2">{side ? "" : "ManageUsers"}</span>
                </Link>
              </Tooltip>
            </li>
          )}
          <li>
            <Tooltip title="Logout" placement="right">
              <Link href="/" className="logout tptp" onClick={handleLogout}>
                <LogoutIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "Logout"}</span>
              </Link>
            </Tooltip>
          </li>
        </ul>
      </section>

      {/* <!-- CONTENT --> */}
      <section id="content">
        {/* <!-- NAVBAR --> */}
        <nav className="nav-nav">
          <DensityMediumIcon onClick={handleClick} />
          <h5 className="pt-2 mx-3">
            Welcome <span style={{ color: "#3572EF" }}>{username}</span>
          </h5>
        </nav>
        {/* <!-- NAVBAR --> */}

        {/* <!-- MAIN --> */}
        <main>
          {currentPath.includes("/admin/dashboard") && (
            <div className="dimdom my-2 ">
              <div className="left">
                <h1>Dashboard</h1>
              </div>

              <ul className="box-info">
                <li onClick={() => router.push("/admin/dashboard")}>
                  <DashboardIcon className="bx bxs-calendar-check" />
                  <span className="text">
                    <h5>Dashboard</h5>
                  </span>
                </li>
                <li onClick={() => router.push("/admin/blogs")}>
                  <DescriptionIcon className="bx bxs-dollar-circle" />
                  <span className="text">
                    <h5>Podcast</h5>
                    <p>Manage Podcast </p>
                  </span>
                </li>
                <li onClick={() => router.push("/admin/leads")}>
                  <LocalLibraryIcon className="bx bxs-dollar-circle" />
                  <span className="text">
                    <h5>Leads</h5>
                    <p>Manage Leads</p>
                  </span>
                </li>
                {role.toLowerCase() === "admin" && (
                  <li onClick={() => router.push("/admin/users")}>
                    <PeopleAltIcon className="bx bxs-dollar-circle" />
                    <span className="text">
                      <h5>Users</h5>
                      <p>Manage Users </p>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          )}
          {children}
        </main>
      </section>
    </div>
  );
};

export default AdminLayout;
