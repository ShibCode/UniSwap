import React, { useEffect } from "react";
import "./About.css";
import {
  faTwitter,
  faMedium,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = "Uniswap";
  }, []);

  return (
    <div className="about">
      <span className="about-glimmer-bg about-bg"></span>
      <div className="about-top">
        <h1 className="about-heading">
          A first-ever Gamefi focused decentralized staking protocol starting
          off as a gaming guild
        </h1>
        <Link to="/Market" className="nft-staking about-btn">
          NFT Staking
        </Link>
        <div className="about-socials">
          <a href="https://twitter.com/AlphaDao2021" target="blank">
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a href="https://medium.com/@alphadao2021" target="blank">
            <FontAwesomeIcon icon={faMedium} className="social-icon" />
          </a>
          <a href="https://discord.com/invite/RvDEBYpxYz" target="blank">
            <FontAwesomeIcon icon={faDiscord} className="social-icon" />
          </a>
        </div>
      </div>
      <div className="about-bottom">
        <div className="stat stat-1">
          <h1 className="stat-heading">20,000</h1>
          <p className="stat-para">Members</p>
        </div>
        <div className="stat stat-2">
          <h1 className="stat-heading">30+</h1>
          <p className="stat-para">Games</p>
        </div>
        <div className="stat stat-3">
          <h1 className="stat-heading">1000+</h1>
          <p className="stat-para">Qualified Scholars</p>
        </div>
        <div className="stat stat-4">
          <h1 className="stat-heading">$100,000</h1>
          <p className="stat-para">Cumulative Earnings</p>
        </div>
      </div>
    </div>
  );
}
