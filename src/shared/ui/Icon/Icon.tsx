"use client";
"use client";

import { cn } from "@/shared/lib/utils";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
  color?: "primary" | "secondary" | "white" | "surface";
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "secondary",
  className,
  ...props
}) => {
  const sizeStyle =
    typeof size === "number"
      ? { width: size, height: size }
      : { width: size, height: size };

  const colorClass = {
    primary: "text-[var(--color-primary)]",
    secondary: "text-[var(--color-text-secondary)]",
    white: "text-white",
    surface: "text-[var(--color-surface)]",
  }[color];

  return (
    <svg
      className={cn("inline-flex shrink-0", colorClass, className)}
      {...sizeStyle}
      {...props}
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};
