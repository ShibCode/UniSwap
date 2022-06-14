import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "./MarketHeader.css";

export default function MarketHeader() {
  let [pathName, setPathName] = useState("/Market");

  let location = useLocation();

  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);

  return (
    <div className="market-header">
      <nav className="market-nav">
        <Link to="/">
          <img src={logo} className="logo" />
        </Link>
        <Link
          to="/Market"
          className={`link-1 market-header-link ${
            pathName === "/Market" ? "selected-header-btn" : ""
          }`}
        >
          Market
        </Link>
        <Link
          to="/Analysis"
          className={`market-header-link ${
            pathName === "/Analysis" ? "selected-header-btn" : ""
          }`}
        >
          Analysis
        </Link>
      </nav>
    </div>
  );
}
