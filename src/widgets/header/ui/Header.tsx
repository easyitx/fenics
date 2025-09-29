import React from "react";
import Image from "next/image";
import "./Header.scss";
import { Button, Icon } from "@/shared/ui";
import { Navigation } from "./Navigation";
import { LiveStream } from "@/widgets/live-stream";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="app_logo">
          <Image
            src="/app_logo.svg"
            alt="App Logo"
            width={131}
            height={37}
            priority
          />
        </div>

        <div className="header_navigation">
          <Navigation />
        </div>

        <div className="header_actions">
          <Button variant="primary">
            Войти
            <Icon name="add-circle" color="primary" size={20} />
          </Button>
        </div>
      </div>
      <div className="header__live">
        <LiveStream />
      </div>
    </header>
  );
};
