/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        accent: "#7C3AED",
      },
      boxShadow: {
        neon: "0 0 25px rgba(99,102,241,0.6), 0 0 50px rgba(124,58,237,0.4)",
      },
    },
  },
  plugins: [],
};
