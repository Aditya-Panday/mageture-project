import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function MainLayout() {
  return (
    <header className="headermain">
      <nav className="navbar navbar-expand-lg navbar-light navbarcustom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </a>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarScroll"
          >
            <ul className="navbar-nav my-2 my-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="https://www.nipsnoida.com/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Podcast Series
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Speaking Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Hidden Gems
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <a href="tel:9311337153" className="mobilecalls">
            <i className="fa fa-phone" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.nipsnoida.com/online-admission"
            className="mobileapplynow"
          >
            Apply Now
          </a>
          <div className="navbar-toggler menubaar">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
