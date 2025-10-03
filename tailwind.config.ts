import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
        './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
        './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-proxima-nova)', 'sans-serif'],
            },
            fontWeight: {
                light: '300',
                normal: '400',
                bold: '700',
                extrabold: '800',
                black: '900',
            },
            screens: {
              xs: "var(--breakpoint-xs)",
              sm: "var(--breakpoint-sm)",
              px: "var(--breakpoint-px)",
              md: "var(--breakpoint-md)",
              lg: "var(--breakpoint-lg)",
              xl: "var(--breakpoint-xl)",
              xxl: "var(--breakpoint-xxl)",
            },
            // Цвета для UI компонентов (кнопки, инпуты и т.п.)
            
            colors: {
                // Основные цвета из CSS переменных
                primary: 'var(--color-primary)',
                background: 'var(--color-background)',
                surface: {
                    DEFAULT: 'var(--color-surface)',
                    // Убираем ссылки на пустые переменные
                },
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    tertiary: 'var(--color-text-tertiary)',
                    white: 'var(--color-text-white)',
                },
                accent: {
                    primary: 'var(--color-accent-primary)',
                    // Убираем ссылки на пустые переменные
                },
                border: {
                    primary: 'var(--color-border-primary)',
                    focus: 'var(--color-border-focus)',
                },
                // Убираем ссылки на пустые переменные состояний
            },
            borderRadius: {
                'sm': 'var(--radius-sm)',
                'md': 'var(--radius-md)',
                'lg': 'var(--radius-lg)',
                'xl': 'var(--radius-xl)',
                'full': 'var(--radius-full)',
            },
            spacing: {
                'xs': 'var(--spacing-xs)',
                'sm': 'var(--spacing-sm)',
                'md': 'var(--spacing-md)',
                'lg': 'var(--spacing-lg)',
                'xl': 'var(--spacing-xl)',
                '2xl': 'var(--spacing-2xl)',
                '3xl': 'var(--spacing-3xl)',
                header: "var(--spacing-header)",
            },
            transitionDuration: {
              fast: "ease-in-out",
              normal: "ease-in-out",
              slow: "ease-in-out",
            },
        },
    },
    plugins: [],
};
