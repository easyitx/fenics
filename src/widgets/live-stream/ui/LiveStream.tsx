"use client";

import React from "react";
import "./LiveStream.scss";
import { Button, Icon } from "@/shared/ui";
import { SkinCard } from "@/entities/skin";
import { cn } from "@/shared/lib/utils";

export const LiveStream: React.FC<{ classname?: string }> = ({ classname }) => {
  const [onlineCount] = React.useState(2430);

  return (
    <div className={cn("live__stream ", [classname])}>
      <div className="live__stream__online">
        <div className="onlineContent min-h-full">
          <Icon name="radar" size={20} color="primary" className="onlineIcon" />
          <span className="contentText">{onlineCount}</span>
          <span className="contentLabel">ONLINE</span>
        </div>
      </div>

      <div className="live__stream__items">
        <div className="itemsFilter flex flex-col">
          <Button className="filterButton active h-1/2">
            <Icon name="next" size={17} className="filterIcon" />
            <span className="filterLabel">LIVE</span>
          </Button>
          <Button className="filterButton h-1/2">
            <Icon
              name="cup"
              size={17}
              color="secondary"
              className="filterIcon"
            />
            <span className="filterLabel">TOP</span>
          </Button>
        </div>

        <div className="itemsList ">
          {new Array(20).fill(0).map((_, i) => (
            <SkinCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
