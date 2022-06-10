import React from "react";
import { Link } from "react-router-dom";
import "./MarketHeader.css";

export default function MarketHeader() {
  return (
    <div className="market-header">
      <nav className="market-nav">
        <Link to="/Staking" className="market-header-link">
          Market
        </Link>
        <Link to="/GamingGuild" className="market-header-link">
          Analysis
        </Link>
      </nav>
    </div>
  );
}
