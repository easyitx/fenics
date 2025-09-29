import React from "react";
import Image from "next/image";
import "./Footer.scss";
import { Icon } from "@/shared/ui";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__counters">
          <div className="footer__counter counter">
            <div className="counter__icon">
              <Icon name="box" />
            </div>
            <div className="counter__info">
              <div className="counter__value">2 147</div>
              <div className="counter__title">Онлайн</div>
            </div>
          </div>
          <div className="footer__counter counter">
            <div className="counter__icon">
              <Icon name="box" />
            </div>
            <div className="counter__info">
              <div className="counter__value">3 204 761</div>
              <div className="counter__title">Игроков</div>
            </div>
          </div>
          <div className="footer__counter counter">
            <div className="counter__icon">
              <Icon name="box" />
            </div>
            <div className="counter__info">
              <div className="counter__value">55 530 723</div>
              <div className="counter__title">Всего игр</div>
            </div>
          </div>
          <div className="footer__counter counter">
            <div className="counter__icon">
              <Icon name="box" />
            </div>
            <div className="counter__info">
              <div className="flex items-center">
                <i className="icon_new icon_coinStroke text-[1.5rem] !text-white lg:text-[1.3rem]"></i>
                <span className="counter__value">188 333 060</span>
              </div>
              <div className="counter__title">Выиграно</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-[4.4rem]">
          <div className="app_logo">
            <Image
              src="/app_logo.svg"
              alt="App Logo"
              width={0}
              height={0}
              priority
            />
          </div>
          {/*<div*/}
          {/*    className="flex items-center justify-center w-[4rem] h-[4rem] rounded-[1.4rem] bg-[linear-gradient(28deg,#F66A7B_-10.79%,#69224D_83.56%)]">*/}
          {/*    <span className="text-[#191D3E] text-[1.5rem] font-400 leading-normal uppercase">18+</span>*/}
          {/*</div>*/}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__column_left">
          <div className="footer__date">© 2018 – 2025 CSFail</div>
          <div className="footer__address">
            {" "}
            DEVS LLC: Legal Entity Code (LEC) 55224776, Armenia, Yerevan, Byron
            St., bld 4 , apt. 4
          </div>
        </div>
        <div className="footer__links">
          <button
            type="button"
            className="footer__nav-item link intercomTrigger text-start"
          >
            {" "}
            Поддержка
          </button>
          <Link className="footer__nav-item link" href="/ru/support/contacts">
            Контакты
          </Link>
          <Link
            className="link footer__nav-item"
            href="/ru/support/user-agreement"
          >
            {" "}
            Пользовательское соглашение{" "}
          </Link>
          <Link
            className="link footer__nav-item"
            href="/ru/support/privacy-policy"
          >
            {" "}
            Privacy Policy{" "}
          </Link>
          <Link className="link footer__nav-item" href="/ru/provably-fair">
            {" "}
            Provably fair{" "}
          </Link>
          <Link className="link footer__nav-item" href="/ru/referrals">
            {" "}
            Партнерство{" "}
          </Link>
        </div>
      </div>
    </footer>
  );
};
