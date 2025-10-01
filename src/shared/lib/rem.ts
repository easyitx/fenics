// Утилиты для работы с rem системой
// Автоматически масштабирует шрифты под разные экраны

export const BASE_FONT_SIZES = {
  mobile: 14,
  tablet: 16,
  desktop: 18,
  large: 20,
} as const;

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  large: 1920,
} as const;

export type FontSize = keyof typeof BASE_FONT_SIZES;
export type Breakpoint = keyof typeof BREAKPOINTS;

// Конвертирует px в rem
export function pxToRem(px: number, baseFontSize: number = 16): string {
  return `${px / baseFontSize}rem`;
}

// Создает адаптивные размеры шрифтов для всех брейкпоинтов
export function getResponsiveFontSize(
  mobileSize: number,
  tabletSize?: number,
  desktopSize?: number,
  largeSize?: number
) {
  const sizes = {
    mobile: mobileSize,
    tablet: tabletSize || mobileSize,
    desktop: desktopSize || tabletSize || mobileSize,
    large: largeSize || desktopSize || tabletSize || mobileSize,
  };

  return {
    fontSize: pxToRem(sizes.mobile, BASE_FONT_SIZES.mobile),
    [`@media (min-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: pxToRem(sizes.tablet, BASE_FONT_SIZES.tablet),
    },
    [`@media (min-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: pxToRem(sizes.desktop, BASE_FONT_SIZES.desktop),
    },
    [`@media (min-width: ${BREAKPOINTS.large}px)`]: {
      fontSize: pxToRem(sizes.large, BASE_FONT_SIZES.large),
    },
  };
}

// Генерирует CSS класс с адаптивными размерами
export function createResponsiveFontClass(
  name: string,
  mobileSize: number,
  tabletSize?: number,
  desktopSize?: number,
  largeSize?: number
): string {
  const responsiveStyles = getResponsiveFontSize(
    mobileSize,
    tabletSize,
    desktopSize,
    largeSize
  );

  let css = `.${name} { font-size: ${responsiveStyles.fontSize}; }`;

  Object.entries(responsiveStyles).forEach(([key, value]) => {
    if (
      key.startsWith("@media") &&
      typeof value === "object" &&
      "fontSize" in value
    ) {
      css += `\n${key} { .${name} { font-size: ${value.fontSize}; } }`;
    }
  });

  return css;
}

// Готовые размеры для разных типов текста
export const FONT_SIZES: Record<
  string,
  { mobile: number; tablet: number; desktop: number; large: number }
> = {
  h1: { mobile: 32, tablet: 40, desktop: 48, large: 56 },
  h2: { mobile: 28, tablet: 32, desktop: 36, large: 42 },
  h3: { mobile: 24, tablet: 28, desktop: 32, large: 36 },
  h4: { mobile: 20, tablet: 24, desktop: 28, large: 32 },
  h5: { mobile: 18, tablet: 20, desktop: 24, large: 28 },
  h6: { mobile: 16, tablet: 18, desktop: 20, large: 24 },

  body: { mobile: 14, tablet: 16, desktop: 18, large: 20 },
  small: { mobile: 12, tablet: 14, desktop: 16, large: 18 },
  caption: { mobile: 10, tablet: 12, desktop: 14, large: 16 },

  button: { mobile: 14, tablet: 16, desktop: 18, large: 20 },
  label: { mobile: 12, tablet: 14, desktop: 16, large: 18 },
};

// Возвращает готовые размеры для конкретного типа текста
export function getPresetFontSize(sizeName: keyof typeof FONT_SIZES) {
  const sizes = FONT_SIZES[sizeName];
  return getResponsiveFontSize(
    sizes.mobile,
    sizes.tablet,
    sizes.desktop,
    sizes.large
  );
}
