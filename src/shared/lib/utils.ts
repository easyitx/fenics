import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Утилита для объединения классов CSS
 * Объединяет clsx и tailwind-merge для оптимальной работы с Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Утилита для создания CSS переменных с fallback значениями
 */
export function cssVar(name: string, fallback?: string) {
  return `var(--${name}${fallback ? `, ${fallback}` : ""})`;
}

/**
 * Утилита для создания responsive размеров шрифтов
 */
export function responsiveFontSize(
  mobile: string,
  tablet: string,
  desktop: string,
  large: string
) {
  return {
    fontSize: mobile,
    "@media (min-width: 640px)": {
      fontSize: tablet,
    },
    "@media (min-width: 1024px)": {
      fontSize: desktop,
    },
    "@media (min-width: 1280px)": {
      fontSize: large,
    },
  };
}
