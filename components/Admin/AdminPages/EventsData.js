import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer } from "react-toastify";
import { Button, CircularProgress, TextField, Tooltip } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

export default function EventsData({
  deleteEvent,
  loading,
  data,
  getLoading,
  title,
  setTitle,
  description,
  setDescription,
  setVideoUrl,
  videoUrl,
  handleSubmit,
}) {
  return (
    <div>
      <div className="tit">
        <h1>Manage Events</h1>
      </div>
      <hr />

      <div className="row">
        <div className="mb-3">
          <TextField
            id="video-url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            label="Video Url"
            className="w-100"
            variant="outlined"
            placeholder="Enter Video Url"
          />
        </div>
        <div className="col-md-6 mb-3">
          <TextField
            id="title"
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
        {getLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <CircularProgress />
          </div>
        ) : data.length === 0 ? (
          <div className="text-center">
            <b>No Record Found</b>
          </div>
        ) : (
          <table className="table table-striped">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Video Details</th>
                <th scope="col">Created Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => {
                const formattedDate = moment(item.createdDate).format(
                  "YYYY-MM-DD"
                );

                return (
                  <tr key={index}>
                    <td className="p-3">{item.title}</td>
                    <td>
                      <Tooltip title={item.description}>
                        {item.description.length > 10
                          ? `${item.description.slice(0, 15)}...`
                          : item.description}
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip title={item.videoUrl}>
                        {item.videoUrl.length > 10
                          ? `${item.videoUrl.slice(0, 15)}...`
                          : item.videoUrl}
                      </Tooltip>
                    </td>
                    <td>{formattedDate}</td>
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
                        <DeleteIcon onClick={() => deleteEvent(item._id)} />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
