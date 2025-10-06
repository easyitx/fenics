import React from "react";

interface LightningIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const LightningIcon: React.FC<LightningIconProps> = ({
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
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" fill={color} />
    </svg>
  );
};
