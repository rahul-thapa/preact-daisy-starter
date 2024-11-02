/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
import safelist from "./src/utils/tailwindSafelist";
import config from "./src/config";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: config.themes,
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  safelist: safelist(),
};
