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
            <a href="/#Liquidity" className="nav-link">
              Liquidity as a service
            </a>
            <a href="/#Gaming" className="nav-link">
              Gaming guild
            </a>
            <a href="/#Community" className="nav-link">
              Community
            </a>
          </div>
          <Link to={"/Staking"} className="nft-staking header-btn">
            NFT Staking
          </Link>
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
