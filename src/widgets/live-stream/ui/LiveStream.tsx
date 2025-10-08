"use client";

import React from "react";
import "./LiveStream.scss";
import { UnstyledButton, Icon, Button } from "@/shared/ui";
import { SkinCard } from "@/entities/skin";
import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";

type FilterType = "live" | "top";

export const LiveStream: React.FC<{ classname?: string }> = ({ classname }) => {
  const [onlineCount] = React.useState("2 500");
  const [activeFilter, setActiveFilter] = React.useState<FilterType>("live");

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  return (
    <div className={cn("live__stream", [classname])}>
      <div className="live__stream__online">
        <div className="onlineContent">
          <Icon name="radar" size={20} color="primary" />
          <span className="contentText">{onlineCount}</span>
          <span className="contentLabel">ONLINE</span>
        </div>
      </div>

      <div className="live__stream__items">
        <div className="itemsFilter">
          <UnstyledButton
            className={cn("liveBtn", {
              "liveBtn--active": activeFilter === "live",
              "liveBtn--inactive": activeFilter !== "live",
            })}
            onClick={() => handleFilterChange("live")}
          >
            <Icon name="next" size={17} />
            <span className="filterLabel">LIVE</span>
          </UnstyledButton>
          <UnstyledButton
            className={cn("liveBtn", {
              "liveBtn--active": activeFilter === "top",
              "liveBtn--inactive": activeFilter !== "top",
            })}
            onClick={() => handleFilterChange("top")}
          >
            <Icon name="cup" size={17} />
            <span className="filterLabel">TOP</span>
          </UnstyledButton>
        </div>

        <div className="itemsList">
          {new Array(20).fill(0).map((_, i) => (
            <div key={i} className="skinCardWrapper">
              <SkinCard withPrice={false} />
              <div className="hoverActions">
                <Button className="actionButton">
                  <Image
                    src="/icons/shopping.svg"
                    alt="Sell"
                    width={12}
                    height={12}
                  />
                  <Typography size="small" weight="semibold" color="white">
                    Продать
                  </Typography>
                </Button>
                <Button
                  className="actionButton"
                  variant="outline"
                  style={{ background: "white" }}
                >
                  <Image
                    src="/icons/change.svg"
                    alt="Change"
                    width={12}
                    height={12}
                  />
                  <Typography size="small" weight="semibold" color="primary">
                    Заменить
                  </Typography>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
