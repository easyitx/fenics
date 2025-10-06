import React from "react";

interface UnlockIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const UnlockIcon: React.FC<UnlockIconProps> = ({
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
      <rect
        x="3"
        y="11"
        width="18"
        height="11"
        rx="2"
        ry="2"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="16" r="1" fill={color} />
      <path
        d="M7 11V7a5 5 0 0 1 9.9-1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
