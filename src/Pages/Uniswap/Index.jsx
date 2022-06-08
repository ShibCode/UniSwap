import React from "react";
import About from "./About/About";
import CategoryBox from "../../Components/CategoryBox/CategoryBox";
import "./UniswapIndex.css";

export default function index() {
  return (
    <div className="uniswap">
      <About />
      <CategoryBox
        desc={
          "allows any investors, including gaming guilds, staking their gamefi NFT assets and generate stable yield with no effort required "
        }
        title={"NFT Staking"}
        id="Staking"
      />
      <CategoryBox
        desc={
          "Offering tailor-made liquidity as a service to game makers. It gives extra support to the projects and allows more type of investors to get involved. Onboarding specific game to our staking protocol improves the gamefi NFT liquidity."
        }
        title={"Liquidity as a service"}
        order={true}
        id="Liquidity"
      />
      <CategoryBox
        desc={
          "currently running 5 scholarship program with over 1000 qualified scholars across the metaverse. We strongly believe education & organizing events are the key drivers to bring more members into blockchain world."
        }
        title={"Gaming guild"}
        id="Gaming"
      />
      <CategoryBox
        desc={
          "Community is the key driver of AlphaDAO while we strongly rely on the feedback from our members. Members are the group who can drive the direction of the whole ecosystem."
        }
        title={"Community"}
        order={true}
        id="Community"
      />
    </div>
  );
}
