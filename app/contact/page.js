"use client";
import MainLayout from "@/components/MainLayout";
import { post } from "@/utils/axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const postData = {
        fullname,
        message,
        email,
        phone,
      };
      await post("http://localhost:3000/api/leads", postData);
      toast.success("Thanks for connect us...", {
        autoClose: 2000,
      });
      setFullname("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.log("error", error);
      toast.error("Some error occured please try again after some time.", {
        autoClose: 1500,
      });
      setFullname("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };
  return (
    <MainLayout className="p-0">
      <div className="container-fluid p-4 m-0 contact-back">
        <div
          className="container contact-inner"
          style={{
            maxWidth: "500px",
          }}
        >
          <h1 className="text-center txt-ct mb-4">
            <b>Contact Us</b>
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullname txt-lb" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                required
                placeholder="Full name"
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="email txt-lb" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone txt-lb" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  maxLength="10"
                  pattern="[0-9]{10}"
                  title="Please enter exactly 10 digits"
                  required
                  placeholder="Phone"
                  style={{
                    appearance: "textfield",
                    MozAppearance: "textfield",
                  }}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message txt-lb" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "rgb(32 134 212)",
                  hover: true,
                }}
                className="btn sub w-100"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </MainLayout>
  );
}
