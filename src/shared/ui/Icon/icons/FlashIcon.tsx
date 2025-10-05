import React from "react";

interface FlashIconProps {
  size?: number;
  className?: string;
}

export const FlashIcon: React.FC<FlashIconProps> = ({
  size = 20,
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="none"
      className={className}
    >
      <path
        d="M10.0699 13.28H13.1599V20.48C13.1599 21.54 14.4799 22.04 15.1799 21.24L22.7499 12.64C23.4099 11.89 22.8799 10.72 21.8799 10.72H18.7899V3.51997C18.7899 2.45997 17.4699 1.95997 16.7699 2.75997L9.19994 11.36C8.54994 12.11 9.07994 13.28 10.0699 13.28Z"
        fill="currentColor"
      />
      <path
        d="M9.25 4.75H2.25C1.84 4.75 1.5 4.41 1.5 4C1.5 3.59 1.84 3.25 2.25 3.25H9.25C9.66 3.25 10 3.59 10 4C10 4.41 9.66 4.75 9.25 4.75Z"
        fill="currentColor"
      />
      <path
        d="M8.25 20.75H2.25C1.84 20.75 1.5 20.41 1.5 20C1.5 19.59 1.84 19.25 2.25 19.25H8.25C8.66 19.25 9 19.59 9 20C9 20.41 8.66 20.75 8.25 20.75Z"
        fill="currentColor"
      />
      <path
        d="M5.25 12.75H2.25C1.84 12.75 1.5 12.41 1.5 12C1.5 11.59 1.84 11.25 2.25 11.25H5.25C5.66 11.25 6 11.59 6 12C6 12.41 5.66 12.75 5.25 12.75Z"
        fill="currentColor"
      />
    </svg>
  );
};
