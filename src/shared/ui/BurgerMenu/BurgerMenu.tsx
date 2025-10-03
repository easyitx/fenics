"use client";

import React from "react";
import { Button, Icon } from "@/shared/ui";
import { AppPopover } from "@/shared/ui/Popover/Popover";

interface BurgerMenuProps {
  children: React.ReactNode;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ children }) => {
  return (
    <AppPopover
      trigger={
        <Button className="h-header aspect-square w-header" variant="secondary">
          <Icon name="menu" color="primary" />
        </Button>
      }
      align="end"
      className="w-64 bg-[var(--color-surface)] border"
    >
      {children}
    </AppPopover>
  );
};
