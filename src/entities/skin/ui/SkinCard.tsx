import React from "react";
import "./SkinCard.scss";
import { Typography } from "@/shared/ui/Typography";
import { SkinData } from "@/mocks/cases";

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
    rarity: "legendary",
    price: 100,
  };

  const skinData = skin || defaultSkin;

  const validRarities = [
    "common",
    "uncommon",
    "rare",
    "mythical",
    "legendary",
    "ancient",
    "other",
  ];
  const rarity = validRarities.includes(skinData.rarity)
    ? skinData.rarity
    : "other";

  return (
    <div
      className={`skinCardLive skinCardLive__${rarity}`}
      style={{ width, height }}
    >
      <div className="skinCardLiveInner">
        <svg
          className="skinCardLiveLogo"
          width="80"
          height="80"
          viewBox="0 0 65 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.291059 17.3447C-1.31674 31.4088 2.96097 63.6297 32.9342 80C56.1741 65.9683 61.0949 47.5518 61.8744 45.408C61.5821 45.067 61.078 44.7692 60.2179 44.4336C59.4682 44.1411 58.5127 43.9464 57.928 43.849C56.9049 47.6005 53.3093 56.6529 47.1119 62.8502C41.0218 58.9038 35.1266 51.3033 41.1193 44.3849C45.7965 39.4641 55.1996 40.9257 57.0998 41.1206C55.3068 39.8733 51.9353 38.8469 50.4737 38.4896C53.7705 37.8563 61.1046 38.1194 64.0669 44.2387C65.5772 40.1949 66.2106 32.4482 52.5687 28.8429C55.5407 25.5786 53.5918 21.5834 43.8476 18.6602C34.1034 15.7369 25.2849 14.3727 19.5358 10.2314C13.7867 6.09013 12.9098 1.80268 13.1046 0C11.6917 1.55907 5.1631 15.7369 26.5029 23.3374C15.6869 22.6066 11.643 21.5834 8.91462 14.2266C6.53704 14.9671 2.17492 16.6139 0.291059 17.3447ZM39.7551 70.2071L42.727 67.6248C41.509 66.8453 38.0596 64.2241 34.006 59.9756C27.0291 52.1413 29.2151 43.1019 31.1802 39.5615C29.28 41.0556 25.7136 45.7783 26.6491 52.7162C27.7794 60.8624 35.8574 67.771 39.7551 70.2071ZM13.6406 43.849C9.85981 52.268 16.6775 60.9338 20.559 64.2144C17.1972 59.0499 14.4688 53.2034 16.8562 45.408C18.766 39.1717 26.1944 33.715 29.6698 31.7661C25.902 32.2858 17.4213 35.43 13.6406 43.849ZM47.9402 28.3557C45.7185 26.2509 39.2191 25.0102 36.2471 24.6529C35.0291 24.4847 39.9499 25.9196 40.5833 26.8453C41.4603 28.3557 41.5577 29.4275 42.9707 29.7199C44.3836 30.0122 48.5249 28.8429 47.9402 28.3557ZM9.30439 47.1133C4.7441 36.2777 4.54597 25.1238 5.01694 20.9013C6.07256 20.3654 8.63204 19.3423 10.425 19.5371C11.9353 24.8477 15.2484 25.9683 19.146 28.1121C11.7892 32.8867 8.47613 37.9537 9.30439 47.1133Z"
            fill="currentColor"
          />
          <path
            d="M64.749 31.9123C64.9763 28.2582 65.2557 20.3264 64.5541 17.8319C60.8513 15.9318 48.9633 10.2314 28.4518 11.4982C38.4883 14.9086 56.1741 17.5396 60.3641 20.9988C60.6369 22.8697 60.4778 27.0077 60.3641 28.8429C61.6471 29.6224 64.3202 31.3276 64.749 31.9123Z"
            fill="currentColor"
          />
        </svg>
        <img
          className="skinCardLiveImage"
          src={skinData.itemImage}
          alt={skinData.marketName}
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
