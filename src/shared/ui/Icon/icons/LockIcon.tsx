import React from "react";

interface LockIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const LockIcon: React.FC<LockIconProps> = ({
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
        d="M6 10V8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="4"
        y="10"
        width="16"
        height="10"
        rx="2"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="15" r="1" fill={color} />
    </svg>
  );
};
