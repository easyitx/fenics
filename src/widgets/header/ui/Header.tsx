"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.scss";
import { Button, Icon } from "@/shared/ui";
import { DesktopNavigation } from "../../DesktopNavigation/ui/DesktopNavigation";
import { cn } from "@/shared/lib/utils";
import { ProfileBalanceWidget } from "@/widgets/ProfileBalanceWidget";
import { useBreakpoint } from "@/shared/hooks";
import { BurgerMenu } from "@/shared/ui/BurgerMenu";

interface IHeaderProps {
  classname?: string;
}

export const Header: React.FC<IHeaderProps> = ({ classname = "" }) => {
  const { isBelowLgx, isBelowLg, isBelowMd, isBelowPx } = useBreakpoint();
  return (
    <header className={cn("header ", [classname])}>
      <div className="header__container h-full  ">
        <div className="app_logo">
          <Link href="/">
            <Image
              src="/app_logo.svg"
              alt="App Logo"
              width={0}
              height={0}
              priority
            />
          </Link>
        </div>

        {!isBelowLgx && (
          <div className="header_navigation h-full ">
            <DesktopNavigation classname="" />
          </div>
        )}

        <div className="header_actions ">
          {!isBelowMd && (
            <>
              <ProfileBalanceWidget
                user={{
                  balance: 2000,
                  username: "RudyGraysssssssssssssssssssssssssssss",
                }}
              />

              {!isBelowPx && (
                <Button className="h-header">
                  Войти
                  <Icon name="add-circle" color="primary" />
                </Button>
              )}

              <Button className="h-header">
                Депозит
                <Icon name="add-circle" color="primary" />
              </Button>

              <Button
                className={cn("h-header aspect-square w-header")}
                variant="secondary"
              >
                <Icon name="notification" color="primary" />
              </Button>
              <Button
                className={cn("h-header aspect-square w-header")}
                variant="secondary"
              >
                <Icon name="exit" color="primary" />
              </Button>
            </>
          )}

          {isBelowMd && (
            <BurgerMenu>
              <div className="space-y-4">
                <div className="profile-section">
                  <ProfileBalanceWidget
                    user={{
                      balance: 2000,
                      username: "RudyGraysssssssssssssssssssssssssssss",
                    }}
                  />
                </div>

                <div className="actions-section space-y-2">
                  <Button className="w-full justify-start" variant="secondary">
                    <Icon name="add-circle" color="primary" />
                    Войти
                  </Button>

                  <Button className="w-full justify-start" variant="secondary">
                    <Icon name="add-circle" color="primary" />
                    Депозит
                  </Button>

                  <Button className="w-full justify-start" variant="secondary">
                    <Icon name="notification" color="primary" />
                    Уведомления
                  </Button>

                  <Button className="w-full justify-start" variant="secondary">
                    <Icon name="exit" color="primary" />
                    Выход
                  </Button>
                </div>
              </div>
            </BurgerMenu>
          )}
        </div>
      </div>
    </header>
  );
};
