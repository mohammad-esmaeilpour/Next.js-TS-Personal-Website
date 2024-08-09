import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans)",
        mono: "var(--font-geist-mono)",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
  },
  darkMode: "class",
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    darkTheme: "dark",
  },
};

export default config;
