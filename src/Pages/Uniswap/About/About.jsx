import React, { useEffect } from "react";
import "./About.css";
import {
  faTwitter,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  useEffect(() => {
    document.title = "Uniswap";
  }, []);

  return (
    <div className="about">
      <span className="about-glimmer-bg about-bg"></span>
      <span className="about-banner-bg about-bg"></span>
      <div className="about-top">
        <h1 className="about-heading">
          A first-ever Gamefi focused Decentralized staking protocol starting
          off as a gaming guild
        </h1>
        <button className="nft-staking about-btn">NFT Staking</button>
        <div className="about-socials">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
          <FontAwesomeIcon icon={faDiscord} className="social-icon" />
        </div>
      </div>
      <div className="about-bottom">
        <div className="stat stat-1">
          <h1 className="stat-heading">$1T+</h1>
          <p className="stat-para">Trade Volume</p>
        </div>
        <div className="stat stat-2">
          <h1 className="stat-heading">99M+</h1>
          <p className="stat-para">All Time Trades</p>
        </div>
        <div className="stat stat-3">
          <h1 className="stat-heading">300+</h1>
          <p className="stat-para">Integrations</p>
        </div>
        <div className="stat stat-4">
          <h1 className="stat-heading">4,400+</h1>
          <p className="stat-para">Community Delegates</p>
        </div>
      </div>
    </div>
  );
}
