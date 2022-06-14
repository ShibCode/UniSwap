import React from "react";
import "./Footer.css";
import {
  faTwitter,
  faMedium,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-heading">News & Announcements</h1>
      <div className="about-socials footer-about-socials">
        <a href="https://twitter.com/AlphaDao2021" target="blank">
          <FontAwesomeIcon
            icon={faTwitter}
            className="social-icon footer-social-icon"
          />
        </a>
        <a href="https://medium.com/@alphadao2021" target="blank">
          <FontAwesomeIcon
            icon={faMedium}
            className="social-icon footer-social-icon"
          />
        </a>
        <a href="https://discord.com/invite/RvDEBYpxYz" target="blank">
          <FontAwesomeIcon
            icon={faDiscord}
            className="social-icon footer-social-icon"
          />
        </a>
      </div>
    </div>
  );
}
