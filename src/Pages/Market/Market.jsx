import React from "react";
import MainMarket from "./MainMarket/MainMarket";
import MarketInfo from "../../Components/MarketInfo/MarketInfo";
import MarketHeader from "../../Components/MarketHeader.jsx/MarketHeader";
import ronin from "../../Assets/ronin.png";
import polygon from "../../Assets/polygon.png";
import pegaxy from "../../Assets/pegaxy.png";
import axieInfinity from "../../Assets/axie infinity.png";
import "./Market.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Market() {
  return (
    <>
      <MarketHeader />
      <div className="market">
        <MainMarket />
        <div className="market-info">
          <div className="market-info-row header-row">
            <div className="market-info-game row-data">Game</div>
            <div className="market-info-blockchain row-data">
              Blockchain{" "}
              <div className="arrows">
                <FontAwesomeIcon icon={faCaretUp} />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="market-info-users row-data">
              Users
              <div className="arrows">
                <FontAwesomeIcon icon={faCaretUp} />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="market-info-transactions row-data">
              Transactions
              <div className="arrows">
                <FontAwesomeIcon icon={faCaretUp} />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="market-info-volume row-data">
              Volume
              <div className="arrows">
                <FontAwesomeIcon icon={faCaretUp} />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="market-info-activity row-data">
              Activity
              <div className="arrows">
                <FontAwesomeIcon icon={faCaretUp} />
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
          </div>
          <MarketInfo
            gameThumbnail={pegaxy}
            game="Pegaxy"
            blockchain="Polygon"
            blockchainImg={polygon}
            users="100"
            transactions="1000"
            volume="1000"
            activity="85"
          />
          <MarketInfo
            gameThumbnail={axieInfinity}
            game="Axie Infinity (Coming Soon)"
            blockchain="Ronin"
            blockchainImg={ronin}
            users="-"
            transactions="-"
            volume="-"
            activity="-"
          />
        </div>
      </div>
    </>
  );
}
