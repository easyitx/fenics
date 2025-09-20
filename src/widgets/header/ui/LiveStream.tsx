'use client'

import React from 'react';
import './LiveStream.scss';
import {Icon} from "@/shared/ui";

export const LiveStream: React.FC = () => {
    const [onlineCount, setOnlineCount] = React.useState(2430);

  return (
    <div className="live-stream">
        <div className="live-stream__online">
            <div className="live-stream__content">
                <Icon name="radar" size={24} color="primary"/>
                <span className="content-text">{onlineCount}</span>
                <span className="content-label">ONLINE</span>
            </div>
        </div>
        Live Stream
    </div>
  );
};