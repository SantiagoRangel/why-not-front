/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      fontFamily: {
        questrial: ["questrial"],
        retroscope: ["retroscope"],
        mabryproBold: ["mabrypro-bold"],
        mabrypro: ["mabrypro"],
        mabryproLight: ["mabrypro-light"],
      },
      colors: {
        bgPail: "#e7e5e0",
      },
    },
  },
  plugins: [],
}
