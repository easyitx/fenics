import React, { ReactNode } from "react";
import s from "./AppBackground.module.scss";
import { cn } from "@/shared/lib/utils";
export const AppBackground = ({ children }: { children: ReactNode }) => {
  return <div className={cn(s.app_background)}>{children}</div>;
};
