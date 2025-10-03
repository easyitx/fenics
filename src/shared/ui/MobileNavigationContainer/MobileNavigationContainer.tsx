"use client";

import React from "react";
import { useBreakpoint } from "@/shared/hooks";

export const MobileNavigationContainer: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const { isBelowLgx } = useBreakpoint();

  if (!isBelowLgx) {
    return null;
  }

  return children;
};
