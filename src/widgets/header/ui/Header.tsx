import React from "react";
import Image from "next/image";
import "./Header.scss";
import { Button, Icon, Typography } from "@/shared/ui";
import { Navigation } from "./Navigation";
import { cn } from "@/shared/lib/utils";
import { ProfileBalanceWidget } from "@/widgets/ProfileBalanceWidget/ui/ProfileBalanceWidget";
import Link from "next/link";
import { mockUser } from "@/mocks/profile";

interface IHeaderProps {
  classname?: string;
}

export const Header: React.FC<IHeaderProps> = ({ classname = "" }) => {
  return (
    <header className={cn("header", [classname])}>
      <div className="header__container">
        <Link href="/" className="app_logo">
          <Image
            src="/app_logo.svg"
            alt="App Logo"
            width={0}
            height={0}
            priority
          />
        </Link>

        <div className="header_navigation">
          <Navigation />
        </div>

        <div className="header_actions">
          <Link href="/profile">
            <Typography>профиль</Typography>
          </Link>
          <ProfileBalanceWidget user={mockUser} />
          <Button variant="primary">
            Войти
            <Icon name="add-circle" color="primary" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};
