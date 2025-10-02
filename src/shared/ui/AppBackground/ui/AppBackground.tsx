import React from "react";
import s from "./AppBackground.module.scss";
import { cn } from "@/shared/lib/utils";

export const AppBackground = ({ classname }: { classname?: string }) => {
  return <div className={cn(s.app_background, classname)} />;
};
