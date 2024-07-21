"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import { CircularProgress, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post } from "@/utils/axios";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    setLoading(true);
    if (!email || !password) {
      toast.error("Please fill all the fields!", {
        autoClose: 2000,
      });
      setLoading(false);
      return;
    }

    try {
      const { data } = await post(`${BASE_URL}/api/login`, {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      toast.success("Login Successfully!", {
        autoClose: 1500,
      });
      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 300);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      if (error.data.error) {
        toast.error(error.data.error, {
          autoClose: 2000,
        });
      } else {
        toast.error("Server Error", {
          autoClose: 2000,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid log-page">
      <Box
        display="grid"
        alignItems="center"
        className="bx-log"
        gap={2}
        p={2}
        borderRadius={3}
        sx={{ border: "2px solid black" }}
      >
        <div>
          <h2 className="font-serif text-log m-0">Back To Basics Admin</h2>
          <hr />
        </div>
        <div className="d-grid gap-3">
          <TextField
            id="outlined-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
          />

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
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" onClick={handleLogin}>
            {loading ? (
              <CircularProgress style={{ color: "black" }} />
            ) : (
              "Login"
            )}
          </Button>

          <div className=" text-center p-0 "></div>
        </div>
      </Box>
      <ToastContainer />
    </div>
  );
}
