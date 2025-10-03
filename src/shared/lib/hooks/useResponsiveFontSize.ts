"use client";

// Хуки для работы с rem системой

import { useEffect, useState } from "react";
import { BASE_FONT_SIZES, BREAKPOINTS } from "../rem";

// Автоматически обновляет базовый размер шрифта при изменении экрана
export function useResponsiveFontSize() {
  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      let baseFontSize: number = BASE_FONT_SIZES.mobile;

      if (width >= BREAKPOINTS.large) {
        baseFontSize = BASE_FONT_SIZES.large;
      } else if (width >= BREAKPOINTS.desktop) {
        baseFontSize = BASE_FONT_SIZES.desktop;
      } else if (width >= BREAKPOINTS.tablet) {
        baseFontSize = BASE_FONT_SIZES.tablet;
      }

      document.documentElement.style.setProperty(
        "--current-base-font-size",
        `${baseFontSize}px`
      );
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);
}

// Возвращает текущий базовый размер шрифта
export function useCurrentFontSize(): number {
  const [fontSize, setFontSize] = useState<number>(BASE_FONT_SIZES.mobile);

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      let baseFontSize: number = BASE_FONT_SIZES.mobile;

      if (width >= BREAKPOINTS.large) {
        baseFontSize = BASE_FONT_SIZES.large;
      } else if (width >= BREAKPOINTS.desktop) {
        baseFontSize = BASE_FONT_SIZES.desktop;
      } else if (width >= BREAKPOINTS.tablet) {
        baseFontSize = BASE_FONT_SIZES.tablet;
      }

      setFontSize(baseFontSize);
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

  return fontSize;
}

// Возвращает текущий брейкпоинт
export function useCurrentBreakpoint():
  | "mobile"
  | "tablet"
  | "desktop"
  | "large" {
  const [breakpoint, setBreakpoint] = useState<
    "mobile" | "tablet" | "desktop" | "large"
  >("mobile");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;

      if (width >= BREAKPOINTS.large) {
        setBreakpoint("large");
      } else if (width >= BREAKPOINTS.desktop) {
        setBreakpoint("desktop");
      } else if (width >= BREAKPOINTS.tablet) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("mobile");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, []);

  return breakpoint;
}
