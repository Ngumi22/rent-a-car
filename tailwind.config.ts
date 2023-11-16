import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/bg.jpg')",
        "hero-patterns": "url('/i8.jpg')",
      },
      colors: {
        "regal-blue": "#15162C",
        "btn-color": "#DCCDC0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
