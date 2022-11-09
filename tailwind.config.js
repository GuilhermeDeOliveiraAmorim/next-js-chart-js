/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cover-login": "url('/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg')",
        "bg-rick-and-morty": "url('/bg-rick-and-morty.jpg')",
      },
    },
  },
  plugins: [],
};
