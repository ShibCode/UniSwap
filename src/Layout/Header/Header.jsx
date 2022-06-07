import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
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
        <img src={logo} className="logo" />
        <div className={navBarClasses}>
          <ul className="nav-list">
            <li className="nav-list-item">Liquidity as a service</li>
            <li className="nav-list-item">Gaming guild</li>
            <li className="nav-list-item">Community</li>
          </ul>
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
