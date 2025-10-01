"use client";

// Провайдер для rem системы

import React, { useEffect } from "react";
import { useResponsiveFontSize } from "../../lib/hooks/useResponsiveFontSize";

interface RemSystemProviderProps {
  children: React.ReactNode;
}

// Инициализирует rem систему и устанавливает базовый размер шрифта
export function RemSystemProvider({ children }: RemSystemProviderProps) {
  useResponsiveFontSize();

  useEffect(() => {
    const setInitialFontSize = () => {
      const width = window.innerWidth;
      let baseFontSize = 14;

      if (width >= 1920) {
        baseFontSize = 20;
      } else if (width >= 1024) {
        baseFontSize = 18;
      } else if (width >= 768) {
        baseFontSize = 16;
      }

      document.documentElement.style.fontSize = `${baseFontSize}px`;
    };

    setInitialFontSize();
  }, []);

  return <>{children}</>;
}
