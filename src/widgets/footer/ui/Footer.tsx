import React from "react";
import Image from "next/image";
import "./Footer.scss";
import { StatsCounters } from "@/shared/ui";
import Link from "next/link";
import { cn } from "@/shared/lib/utils";

export const Footer: React.FC<{ classname?: string }> = ({ classname }) => {
  return (
    <footer className={cn("footer", [classname])}>
      <Image
        src="/app_logo.svg"
        alt="logo"
        width={140}
        height={44}
        className="footer__logo"
      />
      <div className="footer__main">
        <StatsCounters />
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
