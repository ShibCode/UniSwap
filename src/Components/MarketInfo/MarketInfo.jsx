import React from "react";
import "./MarketInfo.css";

export default function MarketInfo({
  gameThumbnail,
  game,
  blockchain,
  blockchainImg,
  users,
  transactions,
  volume,
  activity,
}) {
  let activityBarStyle = {
    width: `${activity}%`,
  };

  return (
    <div className="market-info-row">
      <div className="market-info-game row-data">
        <img src={gameThumbnail} className="game-img" />
        {game}
      </div>
      <div className="market-info-blockchain row-data">
        <img src={blockchainImg} />
        {blockchain}
      </div>
      <div className="market-info-users row-data">{users}</div>
      <div className="market-info-transactions row-data">{transactions}</div>
      <div className="market-info-volume row-data">{volume}</div>
      <div className="market-info-activity row-data">
        <div className="bar-bg">
          <div className="activity-bar" style={activityBarStyle}></div>
        </div>
      </div>
    </div>
  );
}
