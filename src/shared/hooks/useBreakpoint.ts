"use client";

import { useState, useEffect } from "react";

// Брейкпоинты из нашей дизайн системы
export const BREAKPOINTS = {
  xs: 360,
  sm: 425,
  px: 525,
  md: 768,
  lg: 1024,
  lgx: 1440,
  xl: 1920,
  xxl: 2560,
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;

const getBreakpoint = (width: number): BreakpointKey => {
  if (width >= BREAKPOINTS.xxl) return "xxl";
  if (width >= BREAKPOINTS.xl) return "xl";
  if (width >= BREAKPOINTS.lg) return "lg";
  if (width >= BREAKPOINTS.lgx) return "lgx";
  if (width >= BREAKPOINTS.md) return "md";
  if (width >= BREAKPOINTS.px) return "px";
  if (width >= BREAKPOINTS.sm) return "sm";
  if (width >= BREAKPOINTS.xs) return "xs";
  return "xs";
};

interface UseBreakpointReturn {
  currentBreakpoint: BreakpointKey;
  isXs: boolean;
  isSm: boolean;
  isPx: boolean;
  isMd: boolean;
  isLg: boolean;
  isLgx: boolean;
  isXl: boolean;
  isXxl: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isBelowMd: boolean;
  isAboveMd: boolean;
  isBelowLg: boolean;
  isBelowPx: boolean;
  isBelowLgx: boolean;
}

export const useBreakpoint = (): UseBreakpointReturn => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentBreakpoint = getBreakpoint(windowWidth);

  const isXs = currentBreakpoint === "xs";
  const isSm = currentBreakpoint === "sm";
  const isPx = currentBreakpoint === "px";
  const isMd = currentBreakpoint === "md";
  const isLg = currentBreakpoint === "lg";
  const isLgx = currentBreakpoint === "lgx";
  const isXl = currentBreakpoint === "xl";
  const isXxl = currentBreakpoint === "xxl";

  const isMobile = isXs || isSm || isPx;
  const isTablet = isMd;
  const isLaptop = isLg || isLgx;
  const isDesktop = isLg || isXl || isXxl;
  const isBelowMd = isXs || isSm || isPx;
  const isAboveMd = isLg || isXl || isXxl;
  const isBelowLg = isXs || isSm || isPx || isMd;
  const isBelowPx = isXs || isSm;
  const isBelowLgx = windowWidth <= BREAKPOINTS.lgx;
  return {
    currentBreakpoint,
    isXs,
    isSm,
    isPx,
    isMd,
    isLg,
    isLgx,
    isXl,
    isXxl,
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isBelowMd,
    isAboveMd,
    isBelowLg,
    isBelowPx,
    isBelowLgx,
  };
};
