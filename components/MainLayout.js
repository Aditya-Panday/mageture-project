"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
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
                <Link
                  href="/"
                  className="nav-link"
                  style={{
                    color: pathname === "/" ? "#40a297" : "black",
                  }}
                >
                  <b>HOME</b>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  href="/about"
                  className="nav-link"
                  style={{
                    color: pathname.includes("/about") ? "#40a297" : "black",
                  }}
                >
                  <b>ABOUT US</b>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  href="/podcast"
                  className="nav-link"
                  style={{
                    color: pathname.includes("/podcast") ? "#40a297" : "black",
                  }}
                >
                  <b>PODCAST SERIES</b>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  href="/events"
                  className="nav-link"
                  style={{
                    color: pathname.includes("/events") ? "#40a297" : "black",
                  }}
                >
                  <b>SPEAKING EVENTS</b>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  href="/hiddengems"
                  className="nav-link"
                  style={{
                    color: pathname.includes("/hiddengems")
                      ? "#40a297"
                      : "black",
                  }}
                >
                  <b>OUR HIDDEN GEMS</b>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link
                  href="/contact"
                  className="nav-link"
                  style={{
                    color: pathname.includes("/contact") ? "#40a297" : "black",
                  }}
                >
                  <b>CONTACT US</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {children}
      <footer className="hmartsectn" style={{ marginTop: "0px" }}>
        <div className="footermiddle">
          <div className="container">
            <div className="footerow">
              <div className="footerboxtop">
                <div className="footerboxcontent">
                  <span>Let Us Connect Back To Our Roots Together ! </span>
                </div>

                <div className="footerleftlogo">
                  <Image alt="" src="/logo.png" width={180} height={80} />
                </div>
              </div>

              <div className="footerbox">
                <div className="footerlinks">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/events">Speaking Events</Link>
                    </li>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="/hiddengems">Our Hidden Gems</Link>
                    </li>
                    <li>
                      <Link href="/podcast">Podcast Series</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>

                <div className="contactcols">
                  <h4 style={{ display: "flex" }}>Start a Conversation:</h4>
                  <div>
                    <FontAwesomeIcon icon={faEnvelopeOpen} />{" "}
                    <span> naresh_khurana@yahoo.com</span>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faPhone} />{" "}
                    <span>+91-9818251815</span>
                  </div>
                </div>

                <div className="socialboxcols">
                  <h4>Follow Us:</h4>
                  <div className="socialicons">
                    <Link href="" className="fb" style={{ color: "white" }}>
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
                      href=""
                      className="twitter"
                      style={{ color: "white" }}
                    >
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </Link>
                    <Link
                      href=""
                      className="linkedin"
                      style={{ color: "white" }}
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </Link>
                    <Link
                      href="https://www.youtube.com/watch?app=desktop&v=YGyhqeOBilo"
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
