"use client";
import {
  AppBar,
  Button,
  Modal,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ManageUsers({
  email,
  setEmail,
  setPassword,
  password,
  handleClose,
  handleOpen,
  handleSubmit,
  open,
  name,
  setName,
  loading,
  handleTogglePasswordVisibility,
  deleteUser,
  data,
  showPassword,
}) {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="tit">
        <h1>Manage Users</h1>
      </div>
      <hr />
      <div className="w-100 ">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Add Users
            </Typography>
            <AddIcon onClick={handleOpen} />
          </Toolbar>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            className="mx-auto"
            aria-describedby="modal-modal-description"
            style={{ zIndex: 2000, maxWidth: "500px" }}
          >
            <div
              className="modal-dialog-centered"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div
                className="modal-content"
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                }}
              >
                <div className="modal-header">
                  <h5 className="modal-title my-1" id="exampleModalLabel">
                    Add Users
                  </h5>
                </div>
                <hr className="mb-4" />
                <div className="modal-body">
                  <div className="row">
                    <div className="mb-3">
                      <TextField
                        id="Name"
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-100"
                        variant="outlined"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <TextField
                        id="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-100"
                        variant="outlined"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <TextField
                        id="outlined-password-input"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-100"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleTogglePasswordVisibility}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <Button
                    variant="contained"
                    className="mx-2"
                    color="primary"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Create User
                  </Button>
                </div>
              </div>
            </div>
          </Modal>
        </AppBar>
      </div>
      <div className="container my-4" style={{ overflow: "scroll" }}>
        {data.length > 0 ? (
          <table className="table table-striped">
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="p-3">{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.Role}</td>
                  <td>
                    <span
                      className="m-2 my-4 p-1"
                      style={{
                        border: "2px solid red",
                        borderRadius: "10px",
                        color: "red",
                      }}
                      title="Delete"
                      onClick={() => deleteUser(item._id)}
                    >
                      {" "}
                      <DeleteIcon />
                    </span>
                  </td>
                </tr>
              ))}
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
