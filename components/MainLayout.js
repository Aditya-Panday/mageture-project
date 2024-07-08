"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faEnvelopeOpen,
  faPhone,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube
);

export default function MainLayout({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container-fluid p-0 m-0">
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundImage: 'url("/Nav-img.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-fluid">
          <Image
            src="/logo.png"
            alt="logo"
            className="mx-4"
            width={130}
            height={50}
          />

          <button
            className={`navbar-toggler ${isCollapsed ? "" : "collapsed"}`}
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              isCollapsed ? "" : "show"
            } justify-content-end`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-4">
              <li className="nav-item mx-1">
                <Link href="/" className="nav-link">
                  <b>HOME</b>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link href="/about" className="nav-link">
                  <b>ABOUT US</b>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link href="/project" className="nav-link">
                  <b>PODCAST SERIES</b>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link href="/events" className="nav-link">
                  <b>SPEAKING EVENTS</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/events" className="nav-link">
                  <b>OUR HIDDEN GEMS</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer className="hmartsectn">
        <div className="footermiddle">
          <div className="container">
            <div className="footerow">
              <div className="footerboxtop">
                <div className="footerboxcontent">
                  <span>
                    We love working with ambitious brands & individuals
                  </span>
                  <h2>Let’s build something great together!</h2>
                </div>

                <div className="footerleftlogo">
                  <Image alt="" src="/logo.png" width={130} height={50} />
                </div>
              </div>

              <div className="footerbox">
                <div className="footerlinks">
                  <ul>
                    <li>
                      <Link href="#">Home</Link>
                    </li>
                    <li>
                      <Link href="#">Speaking Events</Link>
                    </li>
                    <li>
                      <Link href="#">About us</Link>
                    </li>
                    <li>
                      <Link href="#">Our Hidden Gems</Link>
                    </li>
                    <li>
                      <Link href="#">Podcast Series</Link>
                    </li>
                    <li>
                      <Link href="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>

                <div className="contactcols">
                  <h4 style={{ display: "flex" }}>Start a Conversation:</h4>
                  <div>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <span>backtobasics@Gmail.com</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faPhone} />{" "}
                    <span >
                      +91-9899228899
                    </span>
                  </div>
                </div>

                <div className="socialboxcols">
                  <h4>Follow Us:</h4>
                  <div className="socialicons">
                    <Link href="#" className="fb" style={{ color: "white" }}>
                      <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </Link>
                    <Link
                      href="#"
                      className="instagram"
                      style={{ color: "white" }}
                    >
                      <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </Link>
                    <Link
                      href="#"
                      className="twitter"
                      style={{ color: "white" }}
                    >
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </Link>
                    <Link
                      href="#"
                      className="linkedin"
                      style={{ color: "white" }}
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </Link>
                    <Link
                      href="#"
                      className="youtube"
                      style={{ color: "white" }}
                    >
                      <FontAwesomeIcon icon={["fab", "youtube"]} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footercopyright">
            <div className="container">
              <div className="copyrightbtm">
                <div className="ftrlinks">
                  <div className="footerlinkblk">&copy; 2024 BacktoBasics</div>|{" "}
                  <Link href="#">All right reserved</Link> |{" "}
                  <Link href="#">Terms and conditions</Link> |{" "}
                  <Link href="#">Privacy Policy</Link>
                </div>

                <div className="sitedeveloppedby">
                  <Link
                    href="https://www.magetrue.in/website-designing-company-in-gurugram"
                    target="_blank"
                  >
                    Website Design
                  </Link>{" "}
                  by Magetrue
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
