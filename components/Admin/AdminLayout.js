"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@mui/material/Tooltip";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import DescriptionIcon from "@mui/icons-material/Description";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ArticleIcon from "@mui/icons-material/Article";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const AdminLayout = ({ children }) => {
  const currentPath = usePathname();

  return (
    <div className="container-fluid">
      {/* <!-- SIDEBAR --> */}
      <section id="sidebar" className={side ? "hide" : ""}>
        <a href="/" className="brand tptp">
          <Image src="/Avatar1.png" className="dash-avt" alt="Logo" />
          {/* <img src="Avatar1.png" alt=""  /> */}
        </a>
        <ul className="side-menu top">
          <li
            className={currentPath.includes("/admin/dashboard") ? "active" : ""}
          >
            <Tooltip title="Dashboard" placement="right">
              <Link to="/admin/dashboard" className="tptp">
                <DashboardIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "Dashboard"}</span>
              </Link>
            </Tooltip>
          </li>
          {/* {userInfo && userInfo?.user?.home === true && ( */}
          <li className={currentPath.includes("/admin/home") ? "active" : ""}>
            <Tooltip title="Home" placement="right">
              <Link to="/admin/home" className="tptp">
                <HomeIcon className="ic-edit" />
                <span className="text mx-2 ">{side ? "" : "Home "}</span>
              </Link>
            </Tooltip>
          </li>
          {/* )} */}
          {/* {userInfo && userInfo?.user?.commonsetting === true && ( */}
          <li
            className={
              currentPath.includes("/admin/commonsetting") ? "active" : ""
            }
          >
            <Tooltip title="CommonSetting" placement="right">
              <Link to="/admin/commonsetting" className="tptp">
                <SettingsIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "CommonSetting"}</span>
              </Link>
            </Tooltip>
          </li>
          {/* )} */}
          {/* {userInfo && userInfo?.user?.banner === true && ( */}
          <li className={currentPath.includes("/admin/banner") ? "active" : ""}>
            <Tooltip title="Banner" placement="right">
              <Link to="/admin/banner" className="tptp">
                <ArticleIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "Banner"}</span>
              </Link>
            </Tooltip>
          </li>
          {/* )} */}
          {/* {userInfo && userInfo?.user?.pages === true && ( */}
          <li className={currentPath.includes("/admin/pages") ? "active" : ""}>
            <Tooltip title="Pages" placement="right">
              <Link to="/admin/pages" className="tptp">
                <LayersIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "Pages"}</span>
              </Link>
            </Tooltip>
          </li>
          {/* )} */}
          {/* {userInfo && userInfo?.user?.blogs === true && ( */}
          <li className={currentPath.includes("/admin/blogs") ? "active" : ""}>
            <Tooltip title="Blogs" placement="right">
              <Link to="/admin/blogs" className="tptp">
                <DescriptionIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "Blogs"}</span>
              </Link>
            </Tooltip>
          </li>
          {/* )} */}
          {/* {userInfo && userInfo?.user?.leads === true && ( */}
          <li className={currentPath.includes("/admin/leads") ? "active" : ""}>
            <Tooltip title="Leads" placement="right">
              <Link to="/admin/leads" className="tptp">
                <LocalLibraryIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "LeadsEnquiry"}</span>
              </Link>
            </Tooltip>
          </li>
          {/* )} */}
          {/* {userInfo && userInfo?.user?.Role === "Admin" && ( */}
          <li className={currentPath.includes("/admin/users") ? "active" : ""}>
            <Tooltip title="Manage Users" placement="right">
              <Link to="/admin/users" className="tptp">
                <PeopleAltIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "ManageUsers"}</span>
              </Link>
            </Tooltip>
          </li>
          {/* )} */}
          <li>
            <Tooltip title="Logout" placement="right">
              <Link to="/" className="logout tptp" onClick={handleLogout}>
                <LogoutIcon className="ic-edit" />
                <span className="text mx-2">{side ? "" : "Logout"}</span>
              </Link>
            </Tooltip>
          </li>
        </ul>
      </section>
      {/* <!-- SIDEBAR --> */}

      {/* <!-- CONTENT --> */}
      <section id="content">
        {/* <!-- NAVBAR --> */}
        <nav className="nav-nav">
          <DensityMediumIcon onClick={handleClick} />
          <h5 className="pt-2 mx-3">
            Welcome{" "}
            <span style={{ color: "#3572EF" }}>{username ? username : ""}</span>
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
                <li>
                  <DashboardIcon className="bx bxs-calendar-check" />
                  <span className="text">
                    <h5>Dashboard</h5>
                  </span>
                </li>
                {userInfo && userInfo.user.leads === true && (
                  <li>
                    <HomeIcon className="bx bxs-group" />
                    <span className="text">
                      <h5>Home</h5>
                      <p>Manage Home </p>
                    </span>
                  </li>
                )}
                {userInfo && userInfo.user.commonsetting === true && (
                  <li>
                    <SettingsIcon className="bx bxs-dollar-circle" />
                    <span className="text">
                      <h5>CommonSetting</h5>
                      <p>Manage Common </p>
                    </span>
                  </li>
                )}
                {userInfo && userInfo?.user?.banner === true && (
                  <li>
                    <ArticleIcon className="bx bxs-dollar-circle" />
                    <span className="text">
                      <h5>Banner</h5>
                      <p>Manages Banner</p>
                    </span>
                  </li>
                )}
                {userInfo && userInfo?.user?.pages === true && (
                  <li>
                    <LayersIcon className="bx bxs-dollar-circle" />
                    <span className="text">
                      <h5>Pages</h5>
                      <p>Manages Pages </p>
                    </span>
                  </li>
                )}
                {userInfo && userInfo?.user?.blogs === true && (
                  <li>
                    <DescriptionIcon className="bx bxs-dollar-circle" />
                    <span className="text">
                      <h5>Blogs</h5>
                      <p>Manage Blogs </p>
                    </span>
                  </li>
                )}
                {userInfo && userInfo?.user?.leads === true && (
                  <li>
                    <LocalLibraryIcon className="bx bxs-dollar-circle" />
                    <span className="text">
                      <h5>Leads</h5>
                      <p>Manage Leads </p>
                    </span>
                  </li>
                )}
                {userInfo && userInfo?.user?.Role.toLowerCase() === "admin" && (
                  <li>
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
        {/* <!-- MAIN --> */}
      </section>
      {/* <!-- CONTENT --> */}
      <ToastContainer />
    </div>
  );
};

export default AdminLayout;
