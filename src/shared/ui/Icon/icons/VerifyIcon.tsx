import React from "react";

interface VerifyIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const VerifyIcon: React.FC<VerifyIconProps> = ({
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
        d="M9 12L11 14L15 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};
