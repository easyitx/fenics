"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/shared/lib/utils";
import "./CircularProgressBar.scss";

interface CircularProgressBarProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  children?: React.ReactNode;
  showProgress?: boolean;
  isSpinning?: boolean;
  onSpinComplete?: (isWin: boolean) => void;
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentage,
  size,
  strokeWidth = 8,
  className,
  children,
  showProgress = true,
  isSpinning = false,
  onSpinComplete,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 200, height: 200 });
  const [spinAngle, setSpinAngle] = useState(0);
  const [isWin, setIsWin] = useState<boolean | null>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const minDimension = Math.min(rect.width, rect.height);
        setDimensions({ width: minDimension, height: minDimension });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (isSpinning) {
      setIsWin(null);
      const spinDuration = 3000;
      const startTime = Date.now();

      const spin = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / spinDuration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 3);
        const totalRotations = 5 + Math.random() * 3;
        const currentAngle = easeOut * totalRotations * 360;

        setSpinAngle(currentAngle);

        if (progress < 1) {
          requestAnimationFrame(spin);
        } else {
          const finalAngle = currentAngle % 360;
          const progressAngle = (percentage / 100) * 360;
          const isWinResult = finalAngle <= progressAngle;

          setIsWin(isWinResult);
          onSpinComplete?.(isWinResult);
        }
      };

      requestAnimationFrame(spin);
    }
  }, [isSpinning, percentage, onSpinComplete]);

  const actualSize = size || Math.min(dimensions.width, dimensions.height);
  const radius = (actualSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getProgressColor = () => {
    if (isWin === true) return "var(--color-text-green)";
    if (isWin === false) return "var(--color-text-red)";
    return "var(--color-primary)";
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "circular-progress",
        {
          "circular-progress--win": isWin === true,
          "circular-progress--lose": isWin === false,
        },
        className
      )}
    >
      <svg
        className="circular-progress__svg"
        width={actualSize}
        height={actualSize}
        viewBox={`0 0 ${actualSize} ${actualSize}`}
      >
        <circle
          className="circular-progress__background"
          cx={actualSize / 2}
          cy={actualSize / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />

        <circle
          className="circular-progress__progress"
          cx={actualSize / 2}
          cy={actualSize / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          style={{
            strokeDasharray,
            strokeDashoffset: strokeDashoffset,
            stroke: getProgressColor(),
          }}
        />

        <g
          className="circular-progress__arrow"
          style={{
            transformOrigin: `${actualSize / 2}px ${actualSize / 2}px`,
            transform: `rotate(${spinAngle}deg)`,
          }}
        >
          <image
            href="/upgrades/diamond.svg"
            x={actualSize / 2 - 12}
            y={actualSize / 2 - radius - 12}
            width={24}
            height={24}
            className="circular-progress__arrow-icon"
          />
        </g>
      </svg>

      <div className="circular-progress__content">{children}</div>
    </div>
  );
};
