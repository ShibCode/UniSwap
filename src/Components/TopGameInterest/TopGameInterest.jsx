import React from "react";
import "./TopGameInterest.css";

export default function TopGameInterest({ name, interest, sno, gameImg }) {
  const gameNumberClasses = `game-number game-number-${sno}`;
  return (
    <div className="game-interest-row">
      <div className={gameNumberClasses}>{sno}</div>
      <div className="game-interest-row-info">
        <div className="game-name-div">
          <img
            src={gameImg}
            alt="game-img"
            className="game-img game-interest-img"
          />
          <span className="game-name">{name}</span>
        </div>
        <h5 className="game-interest">$ {interest}</h5>
      </div>
    </div>
  );
}
