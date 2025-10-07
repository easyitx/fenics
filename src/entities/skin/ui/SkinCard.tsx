import React from "react";
import Image from "next/image";
import "./SkinCard.scss";
import { Typography } from "@/shared/ui/Typography";

export interface SkinData {
  _id: string;
  marketName: string;
  weaponName: string;
  shortName: string;
  itemImage: string;
  rarity: string;
  price: number;
}

export const SkinCard = ({
  width,
  height,
  withPrice = true,
  skin,
}: {
  width?: number;
  height?: number;
  withPrice?: boolean;
  skin?: SkinData;
}) => {
  const defaultSkin = {
    _id: "zx",
    marketName: "★ StatTrak™ Flip Knife | Case Hardened (Well-Worn)",
    weaponName: "Flip Knife",
    shortName: "Case Hardened",
    itemImage:
      "https://cdn.csgoskins.gg/public/uih/items/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV9rdWtyaV9hYV9mYWRlX2xpZ2h0LjUyOWY0MTlkNmE5MGUxMTgwNjRiMDdmNjgwMzFmMDMzOGUyNGZjMTIucG5n/auto/auto/85/notrim/d7a25ab6147067a3f83e410138152aaa.png",
    rarity: "ancient",
    price: 100,
  };

  const skinData = skin || defaultSkin;

  return (
    <div
      className={`skinCardLive skinCardLive__${skinData.rarity}`}
      style={{ width, height }}
    >
      <div className="skinCardLiveInner">
        <svg
          className="skinCardLiveLogo"
          width="65"
          height="80"
          viewBox="0 0 65 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
        <Image
          className="skinCardLiveImage"
          src={skinData.itemImage}
          alt={skinData.marketName}
          priority
          width={94}
          height={94}
        />
        {withPrice && (
          <Typography className="skinCardLivePrice" color="white" weight="bold">
            {skinData.price} $
          </Typography>
        )}
        <div className="skinCardLiveInfo">
          <span className="skinName">{skinData.shortName}</span>
          <span className="skinWeapon">{skinData.weaponName}</span>
        </div>
      </div>
    </div>
  );
};
