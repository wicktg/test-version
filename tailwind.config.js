/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Ensure all JS/JSX/TS/TSX files are included
  theme: {
    extend: {
      animation: {
        "scrolling-background": "scrollBackground 50s linear infinite",
        "slow-rotate": "slowRotate 20s linear infinite", // Slow rotation
      },
      keyframes: {
        scrollBackground: {
          "0%": { backgroundPosition: "0 0" }, // Start position
          "100%": { backgroundPosition: "0 100%" }, // Move vertically
        },
        slowRotate: {
          "0%": { transform: "rotate(360deg)" }, // Start at 360 degrees
          "100%": { transform: "rotate(0deg)" }, // Rotate back to 0 degrees
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "cursive"], // Adding the pixelated font
      },
    },
  },
  plugins: [],
};
