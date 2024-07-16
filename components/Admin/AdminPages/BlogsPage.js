import React from "react";
import { ToastContainer } from "react-toastify";
import { Button, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import "react-toastify/dist/ReactToastify.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";

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

export default function BlogsPage({
  link,
  setLink,
  description,
  setDescription,
  title,
  setTitle,
  handleFileChange,
  file,
  loading,
  handleSubmit,
  data,
}) {
  return (
    <div>
      <div className="tit">
        <h1>Manage Podcast</h1>
      </div>
      <hr />
      <div className="form-home container-fluid p-2">
        <div className="row">
          <div className="col-md-6 mb-3">
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              className="w-100"
              onChange={handleFileChange}
              startIcon={<CloudUploadIcon />}
            >
              Upload image
              <VisuallyHiddenInput type="file" />
            </Button>
            {file && (
              <p>
                <b>Selected file:</b> {file.name}
              </p>
            )}
          </div>
          <div className="col-md-6 mb-3">
            <TextField
              id="description"
              label="Description"
              multiline
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-100"
              fullWidth
              variant="outlined"
              placeholder="Enter description"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <TextField
              id="page-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              className="w-100"
              variant="outlined"
              placeholder="Enter Title"
            />
          </div>
          <div className="col-md-6 mb-3">
            <TextField
              id="page-title"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              label="Redirect Link"
              className="w-100"
              variant="outlined"
              placeholder="Enter Redirect Link"
            />
          </div>
        </div>
        <div className="my-3 w-100 p-2">
          <Button
            variant="contained"
            className="w-100"
            onClick={handleSubmit}
            disabled={loading}
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="container my-4" style={{ overflow: "scroll" }}>
        {data.length > 0 ? (
          <table className="table table-striped">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">CreatedDate</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const formattedCreatedDate = moment(item.createdDate).format(
                  "YYYY-MM-DD HH:mm:ss"
                );

                return (
                  <tr key={index}>
                    <td>
                      <Image
                        width={200}
                        height={200}
                        src={item.imgurl}
                        alt="noImage"
                        style={{ width: "200px", maxHeight: "100px" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.phone}</td>
                    <td>{item.content}</td>
                    <td>{formattedCreatedDate}</td>
                    <td>
                      <span
                        className="m-2 my-4 p-1"
                        style={{
                          border: "2px solid red",
                          borderRadius: "10px",
                          color: "red",
                        }}
                        title="Delete"
                      >
                        <DeleteIcon onClick={() => deleteCommon(item._id)} />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="text-center">
            <b>No Record Found</b>
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}
