import React from "react";
import Image from "next/image";
import "./Banners.scss";

export const Banners = () => {
  return (
    <div className="banners">
      <div className="banners__inner">
        <div className="sliderSection">
          <Image
            className="banner"
            src="/banners/banner.png"
            alt="banner"
            width={1500}
            height={400}
          />
        </div>
        <div className="promoSection">
          <Image
            className="banner"
            src="/banners/promo_banner.png"
            alt="banner promo"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};
