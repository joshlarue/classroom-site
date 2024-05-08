import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "base": "#D7DFFF",
        "primary": "#3D485F",
        "secondary": "#FFC759",
        "secondary-light": "#FFEFCF",
        "tertiary": "#483350",
        "accent": "#FF7B9C",
        "text": "#3D485F",
      },
    },
  },
  plugins: [],
};
export default config;
