import React, { JSX } from "react";
import type { TextColor } from "../model/types/index";

interface TypographyProps {
  children: React.ReactNode;
  color?: TextColor;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  maxLength?: number;
  showEllipsis?: boolean;
}

export function Typography({
  children,
  color = "primary",
  as: Tag = "p",
  className,
  maxLength,
  showEllipsis = true,
}: TypographyProps) {
  const truncateText = (
    text: string,
    maxLen: number,
    withEllipsis: boolean
  ) => {
    if (text.length <= maxLen) return text;
    return withEllipsis ? text.slice(0, maxLen) + "..." : text.slice(0, maxLen);
  };

  const renderContent = () => {
    if (typeof children === "string" && maxLength) {
      return truncateText(children, maxLength, showEllipsis);
    }
    return children;
  };

  return (
    <Tag
      className={`
        text-${color}
        ${className ?? ""}
      `}
    >
      {renderContent()}
    </Tag>
  );
}
