import React from "react";
import Image from "next/image";
import "./Banners.scss";
import { cn } from "@/shared/lib/utils";

export const Banners = ({ classname = "" }: { classname?: string }) => {
  return (
    <div className={cn("banners", [classname])}>
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
            height={380}
          />
        </div>
      </div>
    </div>
  );
};
