"use client";

import React from "react";
import "./LiveStream.scss";
import { UnstyledButton, Icon } from "@/shared/ui";
import { SkinCard } from "@/entities/skin";
import { cn } from "@/shared/lib/utils";

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
            <SkinCard key={i} withPrice={false} />
          ))}
        </div>
      </div>
    </div>
  );
};
