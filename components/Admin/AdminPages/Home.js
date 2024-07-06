"use client";
import React from "react";
import JoditEditor from "jodit-react";
import { Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div>
      <div className="tit">
        <h1>Manage Home</h1>
      </div>
      <hr />
      <div className="form-home container-fluid p-2">
        <div className="row">
          <div className="col-md-6 mb-3">
            <TextField
              id="page-heading"
              label="Heading"
              //   value={heading}
              //   onChange={(e) => setHeading(e.target.value)}
              className="w-100"
              variant="outlined"
            />
          </div>
          <div className="col-md-6 mb-3">
            <TextField
              id="page-title"
              label="Title"
              //   value={title}
              //   onChange={(e) => setTitle(e.target.value)}
              className="w-100"
              variant="outlined"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <TextField
              id="description"
              label="Description"
              //   value={description}
              //   onChange={(e) => setDescription(e.target.value)}
              multiline
              className="w-100"
              fullWidth
              variant="outlined"
              placeholder="Description"
            />
          </div>
          <div className="col-md-6 mb-3">
            <TextField
              id="page-keyword"
              //   value={keyword}
              //   onChange={(e) => setKeyword(e.target.value)}
              label="Keyword"
              className="w-100"
              variant="outlined"
            />
          </div>
        </div>
        <div>
          <JoditEditor
            // ref={editor}
            // value={content}
            // onChange={(newContent) => setContent(newContent)}
            tabIndex={1}
          />
        </div>
        <div className="my-3 w-100 p-2">
          <Button
            variant="contained"
            className="w-100"
            // onClick={createHome}
            // disabled={work}
          >
            Submit
          </Button>
        </div>
      </div>
      {/* <div className="container my-4" style={{ overflow: "scroll" }}>
        {data.length > 0 ? (
          <table className="table table-striped">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th scope="col">Heading</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Keyword</th>
                <th scope="col">Content</th>
                <th scope="col">CreatedDate</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const formattedCreatedDate = moment(item.createdDate).format(
                  "YYYY-MM-DD HH:mm:ss"
                );

                return (
                  <tr key={index}>
                    <td className="p-3">{item.heading}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.keyword}</td>
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
                        <DeleteIcon onClick={() => deleteHome(item._id)} />
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
      </div> */}

      <ToastContainer />
    </div>
  );
}
