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
  { id: "cases", label: "Кейсы", icon: "box", href: "/" },
  { id: "upgrades", label: "Апгрейды", icon: "flash", href: "/upgrades" },
  { id: "bonuses", label: "Бонусы", icon: "magic-star", href: "/bonuses" },
  { id: "calendar", label: "Календарь", icon: "calendar", href: "/calendar" },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const { t } = useTranslation("base");
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.id} className="navigationItem">
              <Link
                href={item.href}
                className={`navigationLink ${
                  isActive ? "navigationLink--active" : ""
                }`}
              >
                <Icon
                  name={item.icon}
                  color={isActive ? "primary" : "secondary"}
                  size={21}
                  className="navigationIcon"
                />
                <Typography color={isActive ? "primary" : "secondary"} as="p">
                  {t(`header.nav.${item.id}` as const)}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
