import React from "react";
import "./MainMarket.css";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rinkeby from "../../../Assets/rinkeby.svg";
import bscTest from "../../../Assets/bsc-test.svg";

export default function MainMarket() {
  return (
    <div className="main-market">
      <div className="main-market-header">
        <h1 className="main-market-heading">Market</h1>
        <p className="main-market-para">
          This is a cross-chain game asset lending platform designed to maximize
          the benefits of players and guilds.
        </p>
      </div>
      <div className="main-market-settings">
        <div className="upper-settings">
          <button className="settings-btn selected-market-btn">ALL</button>
          <button className="settings-btn">
            <img src={rinkeby} /> Rinkeby
          </button>
          <button className="settings-btn">
            <img src={bscTest} /> Bsc test
          </button>
        </div>
        <div className="lower-settings">
          <div className="volume">
            <h2 className="settings-heading">Volume</h2>
            <div className="min-to-max">
              <input type="text" placeholder="Min" className="market-input" />
              <span className="to-span">to</span>
              <input type="text" placeholder="Max" className="market-input" />
            </div>
          </div>
          <div className="volume">
            <h2 className="settings-heading">Users</h2>
            <div className="min-to-max">
              <input type="text" placeholder="Min" className="market-input" />
              <span className="to-span">to</span>
              <input type="text" placeholder="Max" className="market-input" />
            </div>
          </div>
          <div className="volume">
            <h2 className="settings-heading">Transactions</h2>
            <div className="min-to-max">
              <input type="text" placeholder="Min" className="market-input" />
              <span className="to-span">to</span>
              <input type="text" placeholder="Max" className="market-input" />
            </div>
          </div>
          <button className="clear-all">Clear all</button>
          <button className="apply">Apply</button>
        </div>
      </div>
      <div className="main-market-filter">
        <div className="main-market-search-bar">
          <input
            type="text"
            placeholder="Search Game's Name"
            className="search-bar-input"
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <button className="dropdown">
          24 Hours{" "}
          <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />
        </button>
        <p className="remaining-items">2 items</p>
      </div>
    </div>
  );
}
