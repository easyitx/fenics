// Конфигурация приложения
export const APP_CONFIG = {
  name: 'Fenics',
  version: '1.0.0',
  theme: {
    defaultTheme: 'dark' as const,
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;