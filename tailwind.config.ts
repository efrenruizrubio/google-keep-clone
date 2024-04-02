import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 1px 1px 0 rgba(65,69,73,.3), 0 1px 3px 1px rgba(65,69,73,.15)",
      },
      spacing: {
        "2.5": "0.625rem",
      },
      height: {
        "7.5": "1.875rem",
      },
      width: {
        "7.5": "1.875rem",
        "50": "12.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // keyframes: {
      //   fadeOut: {
      //     to: {
      //       opacity: "0",
      //       display: "none",
      //     },
      //   },
      //   fadeIn: {
      //     to: {
      //       opacity: "1",
      //       display: "block",
      //     },
      //   },
      // },
      // animation: {
      //   fadeOut: "fadeOut 0.5s ease-in-out forwards",
      //   fadeIn: "fadeIn 0.5s ease-in-out forwards",
      // },
    },
  },
  plugins: [],
};
export default config;
