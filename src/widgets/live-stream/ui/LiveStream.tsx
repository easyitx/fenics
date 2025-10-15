"use client";

import React from "react";
import "./LiveStream.scss";
import { UnstyledButton, Icon } from "@/shared/ui";
import { SkinCard } from "@/entities/skin";
import { cn } from "@/shared/lib/utils";
import { Typography } from "@/shared/ui/Typography";
import Image from "next/image";
import { mockSkinsForLiveStream } from "@/mocks/profile";

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
          {mockSkinsForLiveStream.map((skin, i) => (
            <div key={i} className="skinCardWrapper">
              <SkinCard withPrice={false} skin={skin} />
              <div className="hoverActions">
                <div
                  className="flex items-center w-full justify-center"
                  style={{ gap: "8px" }}
                >
                  <Image
                    src="/avatar.png"
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="avatar"
                  />
                  <div>
                    <Typography
                      size="xs"
                      weight="normal"
                      color="white"
                      lineHeight="none"
                      className="username"
                    >
                      samuray
                    </Typography>
                    <Typography
                      size="xs"
                      weight="normal"
                      color="lightGray"
                      lineHeight="tight"
                      className="weapon"
                    >
                      Ледянной дракон
                    </Typography>
                  </div>
                </div>

                <Image
                  src="/cases/2.png"
                  alt="Case"
                  width={117}
                  height={117}
                  style={{
                    objectFit: "cover",
                    width: "60%",
                    height: "60%",
                    position: "absolute",
                    bottom: 0,
                    right: "-5%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
