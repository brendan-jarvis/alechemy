import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Roboto Mono", "monospace"],
    },
  },
  daisyui: {
    themes: [
      {
        nord: {
          primary: "#8FBCBB",
          "primary-focus": "#88C0D0",
          "primary-content": "#D8DEE9",

          secondary: "#81A1C1",
          "secondary-focus": "#5E81AC",
          "secondary-content": "#D8DEE9",

          accent: "#434C5E",
          "accent-focus": "#4C566A",
          "accent-content": "#B48EAD",

          neutral: "#2E3440",
          "neutral-focus": "#3B4252",
          "neutral-content": "#D8DEE9",

          "base-100": "#ECEFF4",
          "base-200": "#E5E9F0",
          "base-300": "#D8DEE9",
          "base-content": "#2E3440",

          info: "#EBCB8B",
          success: "#A3BE8C",
          warning: "#D08770",
          error: "#BF616A",
        },
      },
    ],
  },
} satisfies Config;
