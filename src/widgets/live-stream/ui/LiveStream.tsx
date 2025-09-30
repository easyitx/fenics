"use client";

import React from "react";
import "./LiveStream.scss";
import { Icon } from "@/shared/ui";
import { SkinCard } from "@/entities/skin";
import { cn } from "@/shared/lib/utils";

export const LiveStream: React.FC<{ classname?: string }> = ({ classname }) => {
  const [onlineCount] = React.useState(2430);

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
          <button className="filterButton active">
            <Icon name="next" size={17} />
            <span className="filterLabel">LIVE</span>
          </button>
          <button className="filterButton">
            <Icon name="cup" size={17} color="secondary" />
            <span className="filterLabel">TOP</span>
          </button>
        </div>

        <div className="itemsList">
          {new Array(20).fill(0).map((_, i) => (
            <SkinCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
