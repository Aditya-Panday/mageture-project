import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToastContainer } from "react-toastify";
import { CircularProgress, Tooltip } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

export default function LeadsPage({ data, deleteLead, loading }) {
  return (
    <div>
      <div className="tit">
        <h1>Manage leads</h1>
      </div>
      <hr />
      <div className="container my-4" style={{ overflow: "scroll" }}>
        {loading ? (
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
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Message</th>
                <th scope="col">CreatedDate</th>
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
                    <td className="p-3">{item.fullname}</td>
                    <td>
                      <Tooltip title={item.email}>
                        {item.email.length > 10
                          ? `${item.email.slice(0, 15)}...`
                          : item.email}
                      </Tooltip>
                    </td>
                    <td>{item.phone}</td>
                    <td>
                      <Tooltip title={item.message}>
                        {item.message.length > 10
                          ? `${item.message.slice(0, 15)}...`
                          : item.message}
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
                        <DeleteIcon onClick={() => deleteLead(item._id)} />
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
