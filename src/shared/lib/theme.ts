// Утилиты для работы с темой
export type Theme = 'dark' | 'light';

export const setTheme = (theme: Theme): void => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

export const getTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme;
  if (savedTheme) {
    return savedTheme;
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Утилиты для работы с темной темой
export const initTheme = (): void => {
  // Устанавливаем темную тему по умолчанию
  document.documentElement.setAttribute('data-theme', 'dark');
};

// Цветовые константы для использования в JavaScript/TypeScript
export const colors = {
  background: '#0F0A0D',
  surface: {
    primary: '#1A1518',
    secondary: '#252025',
    tertiary: '#302B30',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B8B3B8',
    tertiary: '#8A858A',
    disabled: '#5C575C',
  },
  accent: {
    primary: '#6366F1',
    secondary: '#8B5CF6',
    tertiary: '#EC4899',
  },
  border: {
    primary: '#3A353A',
    secondary: '#2A252A',
    focus: '#6366F1',
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
} as const;

export type ColorPalette = typeof colors;