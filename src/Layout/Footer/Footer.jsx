import React from "react";
import "./Footer.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-heading">News & Announcements</h1>
      <p className="footer-para">
        Track our medium / <FontAwesomeIcon icon={faTwitter} />
      </p>
    </div>
  );
}
