"use client";

import { clsx } from "clsx";
import { NextIcon } from "./icons/NextIcon";
import { CupIcon } from "./icons/CupIcon";
import { BoxIcon } from "./icons/BoxIcon";
import { FlashIcon } from "./icons/FlashIcon";
import { MagicStarIcon } from "./icons/MagicStarIcon";
import { CalendarIcon } from "./icons/CalendarIcon";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number | string;
}

const iconComponents = {
  next: NextIcon,
  cup: CupIcon,
  box: BoxIcon,
  flash: FlashIcon,
  "magic-star": MagicStarIcon,
  calendar: CalendarIcon,
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  ...props
}) => {
  const IconComponent = iconComponents[name as keyof typeof iconComponents];

  if (IconComponent) {
    return (
      <IconComponent
        size={typeof size === "number" ? size : parseInt(size)}
        className={clsx("inline-flex shrink-0", className)}
        {...props}
      />
    );
  }

  // Fallback to sprite for other icons
  const sizeStyle =
    typeof size === "number"
      ? { width: size, height: size }
      : { width: size, height: size };

  return (
    <svg
      className={clsx("inline-flex shrink-0", className)}
      {...sizeStyle}
      {...props}
    >
      <use href={`/icons/sprite.svg#${name}`} />
    </svg>
  );
};
