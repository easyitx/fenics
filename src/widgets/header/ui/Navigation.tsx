"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/shared/ui";
import "./Navigation.scss";
import { Typography } from "@/shared/ui/Typography";
import { useTranslation } from "@/app/i18n/client";
import base from "@/app/i18n/locales/en/base.json";

interface NavigationItem {
  id: keyof (typeof base)["header"]["nav"];
  label: string;
  icon: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { id: "cases", label: "Кейсы", icon: "box", href: "cases" },
  { id: "upgrades", label: "Апгрейды", icon: "flash", href: "upgrades" },
  { id: "bonuses", label: "Бонусы", icon: "magic-star", href: "bonuses" },
  { id: "calendar", label: "Календарь", icon: "calendar", href: "calendar" },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname(); // например "/ru/upgrades"
  const { t } = useTranslation("base");

  const currentPathSegment = pathname?.split("/").filter(Boolean).pop();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationItems.map((item) => {
          const isActive = currentPathSegment === item.href;

          return (
            <li key={item.id} className="navigationItem">
              <Link
                href={`/${item.href}`}
                className={`navigationLink ${
                  isActive ? "navigationLink--active" : ""
                }`}
              >
                <Icon name={item.icon} size={21} className="navigationIcon" />
                <Typography
                  color={isActive ? "primary" : "secondary"}
                  as="p"
                  className="navigationText"
                >
                  {t(`header.nav.${item.id}`)}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
