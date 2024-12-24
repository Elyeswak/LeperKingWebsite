/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: "#cdbeac",
          light: "#e5d8c8",
          dark: "#a7998b",
        },
        olive: {
          DEFAULT: "#7b7d6a",
          light: "#a0a28a",
          dark: "#636552",
        },
        green: {
          DEFAULT: "#4e554e",
          light: "#697068",
          dark: "#3a3e3a",
        },
        brown: {
          DEFAULT: "#352f28",
          light: "#5c5348",
          dark: "#251f1a",
        },
        gray: {
          DEFAULT: "#4a484a",
          light: "#646264",
          dark: "#373537",
        },
        purpleGray: {
          DEFAULT: "#3c3b4a",
          light: "#5c5a6a",
          dark: "#2c2b39",
        },
        charcoal: {
          DEFAULT: "#343234",
          light: "#514f51",
          dark: "#272527",
        },
        black: {
          DEFAULT: "#2a252a",
          light: "#3e3a3e",
          dark: "#1c191c",
        },
        gold: {
          DEFAULT: "#c5a46b",
          light: "#e0c28a",
          dark: "#a18357",
        },
        orange: {
          DEFAULT: "#9f673e",
          light: "#bf825e",
          dark: "#7f502f",
        },
        terracotta: {
          DEFAULT: "#7a5c54",
          light: "#9d7a73",
          dark: "#624841",
        },
        dustyRose: {
          DEFAULT: "#60484d",
          light: "#7e6569",
          dark: "#48353a",
        },
        pink: {
          DEFAULT: "#ee999c",
          light: "#f4b6b8",
          dark: "#d37a7d",
        },
        deepRed: {
          DEFAULT: "#8b484a",
          light: "#a86264",
          dark: "#6e3738",
        },
        burgundy: {
          DEFAULT: "#613234",
          light: "#7e4c4d",
          dark: "#4a2325",
        },
        ebony: {
          DEFAULT: "#080400",
          light: "#1a1410",
          dark: "#000000",
        },
      },
    },
  },
  plugins: [],
};
