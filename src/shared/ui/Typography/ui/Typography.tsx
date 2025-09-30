import React from "react";
import { cn } from "@/shared/lib/utils";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body"
    | "caption"
    | "small";
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
    | "6xl";
  weight?: "light" | "normal" | "bold" | "extrabold" | "black";
  color?: "primary" | "secondary" | "tertiary" | "white";
  align?: "left" | "center" | "right" | "justify";
  lineHeight?: "tight" | "snug" | "normal" | "relaxed" | "loose";
  letterSpacing?: "tighter" | "tight" | "normal" | "wide" | "wider" | "widest";
  children: React.ReactNode;
}

const variantStyles = {
  h1: "text-6xl font-black leading-tight tracking-tight",
  h2: "text-5xl font-extrabold leading-tight tracking-tight",
  h3: "text-4xl font-bold leading-snug tracking-tight",
  h4: "text-3xl font-bold leading-snug tracking-normal",
  h5: "text-2xl font-bold leading-normal tracking-normal",
  h6: "text-xl font-bold leading-normal tracking-normal",
  body: "text-base font-normal leading-normal tracking-normal",
  caption: "text-sm font-normal leading-snug tracking-normal",
  small: "text-xs font-normal leading-snug tracking-normal",
};

const colorStyles = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  white: "text-white",
};

export const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  variant = "body",
  size,
  weight,
  color = "primary",
  align,
  lineHeight,
  letterSpacing,
  className,
  children,
  ...props
}) => {
  const baseStyles = variantStyles[variant];

  const sizeClass = size ? `text-${size}` : "";
  const weightClass = weight ? `font-${weight}` : "";
  const colorClass = colorStyles[color];
  const alignClass = align ? `text-${align}` : "";
  const lineHeightClass = lineHeight ? `leading-${lineHeight}` : "";
  const letterSpacingClass = letterSpacing ? `tracking-${letterSpacing}` : "";

  return (
    <Component
      className={cn(
        baseStyles,
        sizeClass,
        weightClass,
        colorClass,
        alignClass,
        lineHeightClass,
        letterSpacingClass,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
