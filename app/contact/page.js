import MainLayout from "@/components/MainLayout";
import React from "react";

export default function page() {
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
          <form>
            <div className="mb-3">
              <label htmlFor="fullname txt-lb" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fullname"
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
      </div>
    </MainLayout>
  );
}
