import React from "react";
import MainMarket from "./MainMarket/MainMarket";
import MarketInfo from "../../Components/MarketInfo/MarketInfo";
import rinkeby from "../../Assets/rinkeby.svg";
import bscTest from "../../Assets/bsc-test.svg";
import kyoko from "../../Assets/kyoko.png";
import uniswapKyoko from "../../Assets/uniswap-kyoko.png";
import MarketHeader from "../../Components/MarketHeader.jsx/MarketHeader";
import "./Market.css";

export default function Market() {
  return (
    <>
      <MarketHeader />
      <div className="market">
        <MainMarket />
        <div className="market-info">
          <div className="market-info-row header-row">
            <div className="market-info-game row-data">Game</div>
            <div className="market-info-blockchain row-data">Blockchain</div>
            <div className="market-info-users row-data">Users</div>
            <div className="market-info-transactions row-data">
              Transactions
            </div>
            <div className="market-info-volume row-data">Volume</div>
            <div className="market-info-activity row-data">Activity</div>
          </div>
          <MarketInfo
            gameThumbnail={kyoko}
            game="KyokoBToken in bsc"
            blockchain="Bsc test"
            blockchainImg={bscTest}
            users="11K"
            transactions="1.65M"
            volume="0"
            activity="85"
          />
          <MarketInfo
            gameThumbnail={uniswapKyoko}
            game="Uniswap V3 Positions NFT-V1"
            blockchain="Rinkeby"
            blockchainImg={rinkeby}
            users="70.65K"
            transactions="668.33K"
            volume="0"
            activity="60"
          />
        </div>
      </div>
    </>
  );
}
