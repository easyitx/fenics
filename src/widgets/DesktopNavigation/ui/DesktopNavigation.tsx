"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/shared/ui";
import { Typography } from "@/shared/ui/Typography";
import { cn } from "@/shared/lib/utils";
import { routes } from "@/shared/config";
import "./DesktopNavigation.scss";

interface DesktopNavigationProps {
  classname?: string;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  classname = "",
}) => {
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || "ru";

  return (
    <nav className={cn("desktop-navigation", [classname])}>
      <ul className="desktop-navigation__list">
        {routes.map((route) => {
          const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "") || "/";
          const isActive = pathWithoutLang === route.path;

          return (
            <li key={route.name} className="desktop-navigation__item">
              <Link
                href={`/${currentLang}${route.path}`}
                className={cn("desktop-navigation__link", {
                  "desktop-navigation__link--active": isActive,
                })}
              >
                <Icon
                  name={route.icon}
                  color={isActive ? "primary" : "secondary"}
                  size={21}
                  className="desktop-navigation__icon"
                />
                <Typography
                  color={isActive ? "primary" : "secondary"}
                  as="p"
                  className="desktop-navigation__text"
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
