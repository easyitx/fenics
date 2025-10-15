import React from "react";
import Image from "next/image";
import "./Banners.scss";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui";
import { Input } from "@/components/ui/input";

export const Banners = ({ classname = "" }: { classname?: string }) => {
  return (
    <div className={cn("banners", [classname])}>
      <div className="banners__inner">
        <div className="sliderSection">
          <Button size="medium" className="sliderSection__button">
            Хочу X2
          </Button>
          {/* knifes */}
          <Image
            className="sliderSection__item sliderSection__item--knife1"
            src="/banners/knife1.svg"
            alt="banner"
            width={120}
            height={120}
            style={{
              top: "20%",
              left: "0%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--knife2"
            src="/banners/knife2.svg"
            alt="banner"
            width={120}
            height={120}
            style={{
              bottom: "10%",
              left: "20%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--knife3"
            src="/banners/knife3.svg"
            alt="banner"
            width={120}
            height={120}
            style={{
              bottom: "15%",
              right: "15%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--knife4"
            src="/banners/knife4.svg"
            alt="banner"
            width={100}
            height={100}
            style={{
              top: "20%",
              right: "5%",
            }}
          />
          {/* coins */}
          <Image
            className="sliderSection__item sliderSection__item--coin1"
            src="/banners/rub.svg"
            alt="banner"
            width={80}
            height={80}
            style={{
              top: "50%",
              left: "5%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--coin2"
            src="/banners/rub.svg"
            alt="banner"
            width={80}
            height={80}
            style={{
              top: "20%",
              left: "20%",
              transform: "rotate(180deg)",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--coin3"
            src="/banners/rub.svg"
            alt="banner"
            width={80}
            height={80}
            style={{
              transform: "rotate(120deg)",
              bottom: "10%",
              left: "30%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--coin4"
            src="/banners/dol.svg"
            alt="banner"
            width={80}
            height={80}
            style={{
              bottom: "15%",
              right: "30%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--coin5"
            src="/banners/dol.svg"
            alt="banner"
            width={80}
            height={80}
            style={{
              top: "20%",
              right: "15%",
              transform: "rotate(60deg)",
            }}
          />
          {/* bonus */}
          <Image
            className="sliderSection__item sliderSection__item--bonus1"
            src="/banners/100.svg"
            alt="banner"
            width={100}
            height={20}
            style={{
              top: "50%",
              left: "35%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--bonus2"
            src="/banners/100.svg"
            alt="banner"
            width={100}
            height={20}
            style={{
              top: "40%",
              right: "35%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--bonus3"
            src="/banners/100.svg"
            alt="banner"
            width={100}
            height={20}
            style={{
              top: "60%",
              right: "35%",
            }}
          />
        </div>
        <div className="promoSection">
          <div className="inputSection">
            <Image
              src="/banners/gift.svg"
              alt="banner"
              width={24}
              height={24}
            />
            <Input
              style={{ backgroundColor: "var(--color-surface)" }}
              placeholder="Введите промокод:"
              className="inputSection__input"
            />
            <Image
              src="/banners/verify.svg"
              alt="banner"
              width={44}
              height={44}
            />
          </div>
        </div>

        <div className="sliderSection__mobile">
          <Button size="medium" className="sliderSection__button">
            Хочу X2
          </Button>
          {/* knifes */}
          <Image
            className="sliderSection__item sliderSection__item--knife1"
            src="/banners/knife1.svg"
            alt="banner"
            width={70}
            height={70}
            style={{
              top: "40%",
              left: "0%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--knife2"
            src="/banners/knife2.svg"
            alt="banner"
            width={70}
            height={70}
            style={{
              bottom: "10%",
              left: "15%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--knife3"
            src="/banners/knife3.svg"
            alt="banner"
            width={70}
            height={70}
            style={{
              bottom: "15%",
              right: "15%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--knife4"
            src="/banners/knife4.svg"
            alt="banner"
            width={70}
            height={70}
            style={{
              top: "30%",
              right: "5%",
            }}
          />
          {/* coins */}
          <Image
            className="sliderSection__item sliderSection__item--coin1"
            src="/banners/rub.svg"
            alt="banner"
            width={45}
            height={45}
            style={{
              top: "60%",
              left: "5%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--coin2"
            src="/banners/rub.svg"
            alt="banner"
            width={45}
            height={45}
            style={{
              top: "35%",
              left: "20%",
              transform: "rotate(180deg)",
            }}
          />

          <Image
            className="sliderSection__item sliderSection__item--coin4"
            src="/banners/dol.svg"
            alt="banner"
            width={45}
            height={45}
            style={{
              top: "15%",
              left: "5%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--coin5"
            src="/banners/dol.svg"
            alt="banner"
            width={45}
            height={45}
            style={{
              top: "45%",
              right: "20%",
              transform: "rotate(60deg)",
            }}
          />
          {/* bonus */}
          <Image
            className="sliderSection__item sliderSection__item--bonus1"
            src="/banners/100.svg"
            alt="banner"
            width={45}
            height={15}
            style={{
              top: "50%",
              left: "30%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--bonus2"
            src="/banners/100.svg"
            alt="banner"
            width={45}
            height={15}
            style={{
              top: "40%",
              right: "30%",
            }}
          />
          <Image
            className="sliderSection__item sliderSection__item--bonus3"
            src="/banners/100.svg"
            alt="banner"
            width={45}
            height={15}
            style={{
              top: "60%",
              right: "30%",
            }}
          />
        </div>
        <div className="promoSection__mobile">
          <div className="promoSection__mobile__heading">
            Активируй промо и получи бесплатное открытие кейса
          </div>
          <div className="inputSection__mobile">
            <Image
              src="/banners/gift.svg"
              alt="banner"
              width={24}
              height={24}
            />
            <Input
              style={{ backgroundColor: "var(--color-surface)" }}
              placeholder="Введите промокод:"
              className="inputSection__input"
            />
            <Image
              src="/banners/verify.svg"
              alt="banner"
              width={44}
              height={44}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
