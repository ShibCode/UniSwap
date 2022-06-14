import React from "react";
import "./GamingGuild.css";
import TopGameInterest from "../../Components/TopGameInterest/TopGameInterest";
import pegaxy from "../../Assets/pegaxy.png";
import axieInfinity from "../../Assets/axie infinity.png";
import Chart from "../../Components/Chart/Chart";
import MarketHeader from "../../Components/MarketHeader.jsx/MarketHeader";

export default function GamingGuild() {
  return (
    <>
      <MarketHeader />
      <div className="gaming-guild">
        <div className="gaming-guild-header">
          <div className="gg-header-item exc">
            <h4 className="header-item-heading">Total NFT value staked</h4>
            <h2 className="header-item-value">$ 100,000</h2>
          </div>
          <div className="gg-header-item">
            <h4 className="header-item-heading">Total NFTs</h4>
            <h2 className="header-item-value">10,000</h2>
          </div>
          <div className="gg-header-item">
            <h4 className="header-item-heading">Volume</h4>
            <h2 className="header-item-value">$ 500,000</h2>
          </div>
        </div>
        <div className="gaming-guild-main">
          <div className="top-game-interest">
            <h1 className="top-game-interest-heading">Top Game Interest</h1>
            <TopGameInterest
              sno="1"
              name="Pegaxy"
              gameImg={pegaxy}
              interest="$100,000"
            />
            <TopGameInterest
              sno="2"
              name="Axie Infinity"
              gameImg={axieInfinity}
              interest="(Coming Soon)"
            />
          </div>
          <div className="gaming-guild-chart">
            <h1 className="chart-heading">NFT Allocation</h1>
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
}
