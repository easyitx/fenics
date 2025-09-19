import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
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
            // Цвета для UI компонентов (кнопки, инпуты и т.п.)
            colors: {
                // Основные цвета из CSS переменных
                primary: 'var(--color-primary)',
                background: 'var(--color-background)',
                surface: {
                    DEFAULT: 'var(--color-surface)',
                    secondary: 'var(--color-surface-secondary)',
                    tertiary: 'var(--color-surface-tertiary)',
                },
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    tertiary: 'var(--color-text-tertiary)',
                    disabled: 'var(--color-text-disabled)',
                },
                accent: {
                    primary: 'var(--color-accent-primary)',
                    secondary: 'var(--color-accent-secondary)',
                    tertiary: 'var(--color-accent-tertiary)',
                },
                border: {
                    primary: 'var(--color-border-primary)',
                    secondary: 'var(--color-border-secondary)',
                    focus: 'var(--color-border-focus)',
                },
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                error: 'var(--color-error)',
                info: 'var(--color-info)',
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
            },
            boxShadow: {
                'sm': 'var(--shadow-sm)',
                'md': 'var(--shadow-md)',
                'lg': 'var(--shadow-lg)',
                'xl': 'var(--shadow-xl)',
            },
            transitionDuration: {
                'fast': '150ms',
                'normal': '250ms',
                'slow': '350ms',
            },
        },
    },
    plugins: [],
};

export default config;