import React, { JSX } from "react";
import type { TextColor } from "../model/types/index";

interface TypographyProps {
  children: React.ReactNode;
  color?: TextColor;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function Typography({
  children,
  color = "primary",
  as: Tag = "p",
  className,
}: TypographyProps) {
  return (
    <Tag
      className={`
        ${className ?? ""}
        text-${color}
      `}
      style={{ color: `var(--color-text-${color})` }}
    >
      {children}
    </Tag>
  );
}
