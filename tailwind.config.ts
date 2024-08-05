import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainWhite: "#f9f9f9",
        mainBlack: "#1a1a1a",
      },
      boxShadow: {
        light: "1px 2px 4px rgba(0, 0, 0, 0.3)",
        dark: "1px 2px 4px rgba(255, 255, 255, 0.3)",
      },
      keyframes: {
        "pull-tape1": {
          "0%": {
            fillOpacity: "1",
            opacity: "1",
            d: 'path("M180.495 131.478L125.453 127.29C116.838 130.162 115.083 140.054 115.283 144.641V184.127L143.402 158.401L172.718 188.914V151.222C172.718 141.649 176.706 133.872 180.495 131.478Z")',
          },
          "100%": {
            fillOpacity: "1",
            opacity: "1",
            d: 'path("M180.495 131.478L125.453 127.29C116.838 130.162 115.083 140.054 115.283 144.641V231.5L143.402 213L172.718 231.5V151.222C172.718 141.649 176.706 133.872 180.495 131.478Z")',
          },
        },
        "pull-tape-reverse": {
          "0%": {
            fillOpacity: "1",
            opacity: "1",
            d: 'path("M180.495 131.478L125.453 127.29C116.838 130.162 115.083 140.054 115.283 144.641V231.5L143.402 213L172.718 231.5V151.222C172.718 141.649 176.706 133.872 180.495 131.478Z")',
          },
          "100%": {
            fillOpacity: "1",
            opacity: "1",
            d: 'path("M180.495 131.478L125.453 127.29C116.838 130.162 115.083 140.054 115.283 144.641V184.127L143.402 158.401L172.718 188.914V151.222C172.718 141.649 176.706 133.872 180.495 131.478Z")',
          },
        },
        "shade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "shade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "shade-in-left": {
          "0%": {
            opacity: "0",
            "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
          },
          "5%": {
            opacity: "1",
            "clip-path": "polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%)",
          },
          "100%": {
            opacity: "1",
            "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          },
        },
      },
      animation: {
        "pull-tape": "pull-tape1 1s ease forwards",
        "pull-tape-reverse": "pull-tape-reverse 1s ease forwards",
        "shade-in": "shade-in 1s ease forwards",
        "shade-out": "shade-out 1s ease forwards",
        "shade-in-left": "shade-in-left 1s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
