import React from "react";
import Image from "next/image";
import "./Banners.scss";
import { cn } from "@/shared/lib/utils";
import { Button, Icon } from "@/shared/ui";
import { PromoInput } from "@/widgets/PromoInput/ui/PromoInput";

export interface BannersProps {
  classname?: string;
}

export const Banners = ({ classname = "" }: BannersProps) => {
  return (
    <div className={cn("banners ", [classname])}>
      <div className="banners__inner gap-2">
        <div className="banner-item banner-item--left relative">
          <Image
            className="banner"
            src="/banners/banner_without_button.png"
            alt="Main banner"
            width={2500}
            height={400}
            priority
            quality={95}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <Button className="absolute w-1/6 h-15 bottom-5 left-1/2 -translate-x-1/2">
            Хочу X2 <Icon name="arrow-up" />
          </Button>
        </div>
        <div className="banner-item banner-item--right relative ">
          <Image
            className="banner"
            src="/banners/promo_banner_without_input.png"
            alt="Promo banner"
            width={600}
            height={400}
            priority
            quality={95}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
            <PromoInput />
          </div>
        </div>
      </div>
    </div>
  );
};
