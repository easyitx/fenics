import React, { JSX } from "react";
import type { TextColor } from "../model/types/index";

interface TypographyProps {
  children: React.ReactNode;
  color?: TextColor;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  maxLength?: number;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "small"
    | "caption"
    | "button"
    | "label";
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  lineHeight?: "none" | "tight" | "snug" | "normal" | "relaxed" | "loose";
}

export function Typography({
  children,
  color = "primary",
  as: Tag = "p",
  className,
  maxLength,
  size = "base",
  weight,
  lineHeight,
}: TypographyProps) {
  const getSizeClass = () => {
    if (size.startsWith("h")) {
      return `text-${size}`;
    }
    return `text-${size}`;
  };

  const getWeightClass = () => {
    if (weight) {
      return `font-${weight}`;
    }
    return "";
  };

  const getLineHeightClass = () => {
    if (lineHeight) {
      return `leading-${lineHeight}`;
    }
    return "";
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const renderContent = () => {
    if (typeof children === "string" && maxLength) {
      return truncateText(children, maxLength);
    }
    return children;
  };

  return (
    <Tag
      className={`
        ${getSizeClass()}
        ${getWeightClass()}
        ${getLineHeightClass()}
        text-${color}
        ${className ?? ""}
      `.trim()}
    >
      {renderContent()}
    </Tag>
  );
}
