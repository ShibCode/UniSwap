import React, { useState, useEffect } from "react";
import "./MainMarket.css";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ronin from "../../../Assets/ronin.png";
import polygon from "../../../Assets/polygon.png";

export default function MainMarket() {
  let [activeBtn, setActiveBtn] = useState("btn1");
  let [activeTimeFilter, setActiveTimeFilter] = useState("24 Hours");
  let [isOpen, setIsOpen] = useState(false);

  const btn1Classes = `settings-btn ${
    activeBtn == "btn1" ? "selected-market-btn" : ""
  }`;
  const btn2Classes = `settings-btn ${
    activeBtn == "btn2" ? "selected-market-btn" : ""
  }`;
  const btn3Classes = `settings-btn ${
    activeBtn == "btn3" ? "selected-market-btn" : ""
  }`;
  const dropdownMenuClasses = `dropdown-menu ${
    isOpen ? "show-dropdown-menu" : ""
  }`;

  useEffect(() => {
    document.title = "Market";

    document.body.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("dropdown") ||
        e.target.classList.contains("dropdown-menu") ||
        e.target.classList.contains("dropdown-arrow")
      ) {
      } else {
        setIsOpen(false);
      }
    });
    document.body.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        setIsOpen(false);
      }
    });
  }, []);

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
          <button
            className={btn1Classes}
            onClick={() => {
              setActiveBtn("btn1");
            }}
          >
            ALL
          </button>
          <button
            className={btn2Classes}
            onClick={() => {
              setActiveBtn("btn2");
            }}
          >
            <img src={polygon} className="polygon" /> Polygon
          </button>
          <button
            className={btn3Classes}
            onClick={() => {
              setActiveBtn("btn3");
            }}
          >
            <img src={ronin} className="ronin" /> Ronin
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
        <div className="drop-down">
          <button
            className="dropdown"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {activeTimeFilter}
            <FontAwesomeIcon icon={faAngleDown} className="dropdown-arrow" />
          </button>
          <div className={dropdownMenuClasses}>
            <button
              className={
                activeTimeFilter == "24 Hours" ? "active-time-filter" : ""
              }
              onClick={() => {
                setActiveTimeFilter("24 Hours");
              }}
            >
              24 Hours
            </button>
            <button
              className={
                activeTimeFilter == "7 Days" ? "active-time-filter" : ""
              }
              onClick={() => {
                setActiveTimeFilter("7 Days");
              }}
            >
              7 Days
            </button>
            <button
              className={
                activeTimeFilter == "30 Days" ? "active-time-filter" : ""
              }
              onClick={() => {
                setActiveTimeFilter("30 Days");
              }}
            >
              30 Days
            </button>
          </div>
        </div>
        <p className="remaining-items">2 items</p>
      </div>
    </div>
  );
}
