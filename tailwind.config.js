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
        "studio-ghibli": "url('/etqr6fOOCXQOgwrQXaKwenTSuzx.jpg')",
        "rick-and-morty": "url('/bg-rick-and-morty.jpg')",
        "coin-cap": "url('/coin-cap.jpg')",
      },
    },
  },
  plugins: [],
};
