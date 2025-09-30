import React from "react";
import Image from "next/image";
import "./Header.scss";
import { Button, Icon } from "@/shared/ui";
import { Navigation } from "./Navigation";
import { cn } from "@/shared/lib/utils";
import { ProfileBalanceWidget } from "@/widgets/ProfileBalanceWidget/ui/ProfileBalanceWidget";

interface IHeaderProps {
  classname?: string;
}

export const Header: React.FC<IHeaderProps> = ({ classname = "" }) => {
  return (
    <header className={cn("header", [classname])}>
      <div className="header__container">
        <div className="app_logo">
          <Image
            src="/app_logo.svg"
            alt="App Logo"
            width={0}
            height={0}
            priority
          />
        </div>

        <div className="header_navigation">
          <Navigation />
        </div>

        <div className="header_actions">
          <ProfileBalanceWidget />
          <Button variant="primary">
            Войти
            <Icon name="add-circle" color="primary" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};
