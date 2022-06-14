import React from "react";
import "./Footer.css";
import {
  faTwitter,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-heading">News & Announcements</h1>
      <div className="about-socials footer-about-socials">
        <FontAwesomeIcon
          icon={faTwitter}
          className="social-icon footer-social-icon"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="social-icon footer-social-icon"
        />
        <FontAwesomeIcon
          icon={faDiscord}
          className="social-icon footer-social-icon"
        />
      </div>
    </div>
  );
}
