import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-proxima-nova)", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        surface: {
          DEFAULT: "var(--color-surface)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          tertiary: "var(--color-text-tertiary)",
          white: "var(--color-text-white)",
        },
        accent: {
          primary: "var(--color-accent-primary)",
        },
        border: {
          primary: "var(--color-border-primary)",
          focus: "var(--color-border-focus)",
        },
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      // ✅ теперь расширение, а не перезапись
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
        "3xl": "var(--spacing-3xl)",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "250ms",
        slow: "350ms",
      },
    },
  },
  plugins: [],
} satisfies Config;
