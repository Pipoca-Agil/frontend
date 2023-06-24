/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      container: {
        center: true
      }
    },
    colors: {
      custom: {
        GREEN: "#37595B",
        YELLOW: "#FFBC11",
        GOLD: "#D09600",
        BLACK: "#181818",
        "BLACK-100": "#141414",
        GRAY: "#DCDCDC"
      }
    },
    plugins: []
  }
};
