import React from "react";
import "./GamingGuild.css";
import TopGameInterest from "../../Components/TopGameInterest/TopGameInterest";
import kyoko from "../../Assets/kyoko.png";
import uniswapKyoko from "../../Assets/uniswap-kyoko.png";
import Chart from "../../Components/Chart/Chart";

export default function GamingGuild() {
  return (
    <div className="gaming-guild">
      <div className="gaming-guild-header">
        <div className="gg-header-item exc">
          <h4 className="header-item-heading">Total Deposits</h4>
          <h2 className="header-item-value">$ 10.22K</h2>
        </div>
        <div className="gg-header-item">
          <h4 className="header-item-heading">Total NFTs</h4>
          <h2 className="header-item-value">10</h2>
        </div>
        <div className="gg-header-item">
          <h4 className="header-item-heading">Total Interest</h4>
          <h2 className="header-item-value">$ 0</h2>
        </div>
      </div>
      <div className="gaming-guild-main">
        <div className="top-game-interest">
          <h1 className="top-game-interest-heading">Top Game Interest</h1>
          <TopGameInterest
            sno="1"
            name="KyokoBToken in bsc"
            gameImg={kyoko}
            interest="0"
          />
          <TopGameInterest
            sno="2"
            name="Uniswap V3 Positions NFT-V1"
            gameImg={uniswapKyoko}
            interest="0"
          />
        </div>
        <div className="gaming-guild-chart">
          <h1 className="chart-heading">Deposit Commodities</h1>
          <Chart />
        </div>
      </div>
    </div>
  );
}
