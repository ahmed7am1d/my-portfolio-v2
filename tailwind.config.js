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
        // Theme
        primary: "var(--primary-theme)",
        secondary: "var(--secondary-theme)",

        // Background
        "theme-light": "var(--background-color)",
        "theme-dark": "var(--background-color-dark)",

        // Navbar
        "nav-light": "var(--background-nav-light)",
        "nav-dark": "var(--background-nav-dark)",
        "nav-item-tooltip-light": "var(--bacground-nav-tooltip-item-light)",
        "nav-item-tooltip-dark": "var(--bacground-nav-tooltip-item-dark)",

        // Colors
        "gray": "var(--gray)",
        "soft-gray": "var(--soft-gray)",
        "dark-gray": "var(--dark-gray)",
      },
    },
  },
  plugins: [],
};
