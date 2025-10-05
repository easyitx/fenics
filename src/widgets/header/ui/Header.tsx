import React from "react";
import Image from "next/image";
import "./Header.scss";
import { Button, Icon, UnstyledButton } from "@/shared/ui";
import { Navigation } from "./Navigation";
import { cn } from "@/shared/lib/utils";
import { ProfileBalanceWidget } from "@/widgets/ProfileBalanceWidget/ui/ProfileBalanceWidget";
import Link from "next/link";
import { user } from "@/mocks/profile";

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
          {user ? (
            <div className="flex items-center" style={{ gap: "10px" }}>
              <Button variant="primary" className="h-[59px]">
                Депозит
                <Icon name="add-circle" color="primary" size={20} />
              </Button>
              <ProfileBalanceWidget user={user} />
              <UnstyledButton className="w-[59px] h-[59px]">
                <Image
                  src="/icons/notification.svg"
                  alt="Notification"
                  width={24}
                  height={24}
                />
              </UnstyledButton>
              <UnstyledButton className="w-[59px] h-[59px]">
                <Image
                  src="/icons/Exit.svg"
                  alt="Exit"
                  width={24}
                  height={24}
                />
              </UnstyledButton>
            </div>
          ) : (
            <Button variant="primary" className="h-[59px]">
              Войти
              <Icon name="add-circle" color="primary" size={20} />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
