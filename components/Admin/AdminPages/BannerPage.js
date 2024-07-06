"use client";
import {
  AppBar,
  Button,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
// import { uploadImageToCloudinary } from "../utils/Func";
// import { post, get, del, put } from "../utils/CustomAxios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import moment from "moment";
// import EditBanner from "./EditBanner";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function BannerPage() {
  return (
    <div>
      <div className="tit">
        <h1>Manage Banner</h1>
      </div>
      <hr />
      <div className="w-100">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Add Banner
            </Typography>
            <AddIcon
            // onClick={handleOpen}
            />
          </Toolbar>
          {/* <EditBanner
           open={editOpen}
           handleClose={handleEditClose}
           bannerId={selectedBannerId}
           getData={getData}
          /> */}
          <Modal
            // open={open}
            // onClose={handleClose}
            zIndex={9000}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Banner
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    // onClick={handleClose}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="w-full mb-2">
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        className="w-100"
                        // onChange={handleFileChange}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload file
                        <VisuallyHiddenInput type="file" />
                      </Button>
                      {/* {file && (
                         <p className="py-2">
                          <b>Selected file:</b> {file.name}
                        </p>
                       )} */}
                    </div>
                    <div className="w-full my-2">
                      <TextField
                        id="text"
                        label="Banner Name"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        className="w-100"
                        variant="outlined"
                      />
                    </div>
                    <div className="w-full my-2">
                      <TextField
                        id="text"
                        label="Description"
                        // value={description}
                        // onChange={(e) => setDescription(e.target.value)}
                        className="w-100"
                        variant="outlined"
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Button
                    variant="contained"
                    // onClick={createBanner}
                    color="primary"
                  >
                    Add Banner
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        </AppBar>
      </div>
      <div className="container my-4" style={{ overflow: "scroll" }}>
        {/* <table className="table table-striped">
          <thead style={{ backgroundColor: "black", color: "white" }}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Status</th>
              <th scope="col">Description</th>
              <th scope="col">CreatedDate</th>
              <th scope="col">UpdatedDate</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const formattedCreatedDate = moment(item.createdDate).format(
                "YYYY-MM-DD HH:mm:ss"
              );
              const formattedUpdatedDate = moment(item.updatedDate).format(
                "YYYY-MM-DD HH:mm:ss"
              );

              return (
                <tr className="p-4" key={index}>
                  <td className="p-3">{item.name}</td>
                  <td>
                    <img
                      src={item.imgurl}
                      alt="noImage"
                      style={{ width: "200px", maxHeight: "100px" }}
                    />
                  </td>
                  <td>
                    {item.status === "active" ? (
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "green", color: "white" }}
                        onClick={() => editStatus(item._id)}
                      >
                        {item.status}
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "red", color: "white" }}
                        onClick={() => editStatus(item._id)}
                      >
                        {item.status}
                      </Button>
                    )}
                  </td>
                  <td>{item.description}</td>
                  <td>{formattedCreatedDate}</td>
                  <td>{formattedUpdatedDate}</td>
                  <td className="d-grid justify-content-start align-items-center m-0">
                    <span
                      className="p-1 "
                      style={{
                        border: "2px solid blue",
                        borderRadius: "10px",
                        cursor: "pointer",
                        color: "blue",
                      }}
                      title="Edit"
                    >
                      <EditIcon onClick={() => handleEditOpen(item._id)} />
                    </span>
                    <span
                      className=" mt-4 p-2 "
                      style={{
                        border: "2px solid red",
                        borderRadius: "10px",
                        cursor: "pointer",
                        color: "red",
                      }}
                      title="Delete"
                    >
                      <DeleteIcon onClick={() => deleteBanner(item._id)} />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
        <ToastContainer />
      </div>
    </div>
  );
}
