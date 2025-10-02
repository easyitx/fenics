"use client";

import * as Popover from "@radix-ui/react-popover";
import { cn } from "@/shared/lib/utils";
import React from "react";

interface AppPopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  className?: string;
}

export const AppPopover: React.FC<AppPopoverProps> = ({
  trigger,
  children,
  side = "bottom",
  align = "center",
  className,
}) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side={side}
          align={align}
          sideOffset={8}
          className={cn(
            "z-50 rounded-lg  p-4 shadow-lg",
            "data-[side=top]:slide-in-from-bottom-2",
            "data-[side=bottom]:slide-in-from-top-2",
            "data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2",
            className
          )}
        >
          {children}
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
