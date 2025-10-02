"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/shared/ui";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/lib/utils";
import { routes } from "@/shared/config";
import "./MobileNavigation.scss";

interface MobileNavigationProps {
  classname?: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  classname = "",
}) => {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || "ru";

  return (
    <nav className={cn("mobile-navigation", [classname])}>
      <ul className="mobile-navigation__list">
        {routes.map((route) => {
          const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "") || "/";
          const isActive = pathWithoutLang === route.path;

          return (
            <li key={route.name} className="mobile-navigation__item">
              <Link
                href={`/${currentLang}${route.path}`}
                className={cn("mobile-navigation__link", {
                  "mobile-navigation__link--active": isActive,
                })}
              >
                <Icon
                  name={route.icon}
                  color={isActive ? "primary" : "secondary"}
                  size={20}
                  className="mobile-navigation__icon"
                />
                <Typography
                  color={isActive ? "primary" : "secondary"}
                  as="p"
                  className="mobile-navigation__text"
                >
                  {route.label}
                </Typography>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
