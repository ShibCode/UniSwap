import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
import { Link } from "react-router-dom";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  let [isOpen, setIsOpen] = useState(false);

  let openBtnClasess = `header-icon header-bars ${isOpen ? "" : "show"}`;
  let closeBtnClasess = `header-icon header-bars ${isOpen ? "show" : ""}`;
  let navBarClasses = `nav-right ${isOpen ? "show-nav" : ""}`;

  return (
    <div className="header">
      <nav className="nav">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className={navBarClasses}>
          <div className="nav-links">
            <Link to="/market" className="nav-link">
              Liquidity as a service
            </Link>
            <Link to="#" className="nav-link">
              Gaming guild
            </Link>
            <Link to="#" className="nav-link">
              Community
            </Link>
          </div>
          <button className="nft-staking header-btn">NFT Staking</button>
        </div>
        <button
          className="hammenu-btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <FontAwesomeIcon icon={faBars} className={openBtnClasess} />
          <FontAwesomeIcon icon={faClose} className={closeBtnClasess} />
        </button>
      </nav>
    </div>
  );
}
