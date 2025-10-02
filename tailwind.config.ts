import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
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
      screens: {
        xs: "var(--breakpoint-xs)",
        sm: "var(--breakpoint-sm)",
        px: "var(--breakpoint-px)",
        md: "var(--breakpoint-md)",
        lg: "var(--breakpoint-lg)",
        xl: "var(--breakpoint-xl)",
        xxl: "var(--breakpoint-xxl)",
      },
      colors: {
        primary: "#eb2bac",
        background: "#0f0a0d",
        surface: {
          DEFAULT: "#1a1016",
        },
        text: {
          primary: "#eb2bac",
          secondary: "#5a5257",
          tertiary: "#ffffffab",
          white: "#ffffff",
        },
        accent: {
          primary: "#f5b0db",
        },
        border: {
          primary: "#a40e74",
          focus: "#f5b0db",
        },
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        header: "var(--spacing-header)",
      },
      transitionTimingFunction: {
        fast: "ease-in-out",
        normal: "ease-in-out",
        slow: "ease-in-out",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },

      transitionDuration: {
        fast: "var(--transition-fast)",
        normal: "var(--transition-normal)",
        slow: "var(--transition-slow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
