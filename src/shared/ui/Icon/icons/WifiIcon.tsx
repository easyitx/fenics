import React from "react";

interface WifiIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const WifiIcon: React.FC<WifiIconProps> = ({
  size = 20,
  className,
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M5 12.55a11 11 0 0 1 14.08 0"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.42 9a16 16 0 0 1 21.16 0"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.53 16.11a6 6 0 0 1 6.95 0"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="20"
        x2="12.01"
        y2="20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
