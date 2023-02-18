module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "500px",
        // => @media (min-width: 500px) { ... }
      },
      maxWidth: {
        "1/2": "200px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
