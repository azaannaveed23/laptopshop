/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bblue: "#0046BE", // Royal Blue
        bblueDark: "#003087", // Deep Navy Blue
        byellow: "#FFCC00", // Signature Tech Yellow
        byellowHover: "#E5B800",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
