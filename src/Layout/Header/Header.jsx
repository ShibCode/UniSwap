import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  let [isOpen, setIsOpen] = useState(false);
  let [scroll, setScroll] = useState(0);

  let openBtnClasess = `header-icon header-bars ${isOpen ? "" : "show"}`;
  let closeBtnClasess = `header-icon header-bars ${isOpen ? "show" : ""}`;
  let navBarClasses = `nav-right ${isOpen ? "show-nav" : ""}`;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <div className={`header ${scroll == 0 ? "" : "scroll-header"}`}>
      <nav className="nav">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
        <div className={navBarClasses}>
          <div className="nav-links">
            <a
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              href="/#Liquidity"
              className="nav-link"
            >
              Liquidity as a service
            </a>
            <a
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              href="/#Gaming"
              className="nav-link"
            >
              Gaming guild
            </a>
            <a
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              href="/#Community"
              className="nav-link"
            >
              Community
            </a>
          </div>
          <Link to={"/Market"} className="nft-staking header-btn">
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
