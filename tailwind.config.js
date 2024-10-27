/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Background
        "theme-light": "var(--background-color)",
        "theme-dark": "var(--background-color-dark)",

        // Navbar
        "nav-light": "var(--background-nav-light)",
        "nav-dark": "var(--background-nav-dark)",
      },
    },
  },
  plugins: [],
};
