import React from "react";
import Image from "next/image";
import "./SkinCard.scss";

export const SkinCard = () => {
  const skin = {
    _id: "zx",
    marketName: "★ StatTrak™ Flip Knife | Case Hardened (Well-Worn)",
    weaponName: "Flip Knife",
    shortName: "Case Hardened",
    itemImage:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
    rarity: "ancient",
  };

  return (
    <div className={`skinCardLive skinCardLive__${skin.rarity}`}>
      <div className="skinCardLiveInner">
        <svg
          className="skinCardLiveLogo"
          width="65"
          height="80"
          viewBox="0 0 65 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths */}
        </svg>

        <Image
          className="skinCardLiveImage"
          src={skin.itemImage}
          alt={skin.marketName}
        />

        <div className="skinCardLiveInfo">
          <span className="skinName">{skin.shortName}</span>
          <span className="skinWeapon">{skin.weaponName}</span>
        </div>
      </div>
    </div>
  );
};
