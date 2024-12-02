/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        webstyle: {
          primary: "#299D91",
          secondary: "#191919",
          grey: {
            600: "#4B5768",
            500: "#525256",
            400: "#666666",
            300: "#878787",
            200: "#9F9F9F",
            100: "#E8E8E8",
            50: "#F3F3F3",
            0: "#F4F5F7"
          },
          addon: {
            danger: "#E73D1C",
            success: "#4DAF6E",
            black: "#191D23",
            white75: "rgba(255, 255, 255, 0.75)",
            special: "rgba(210, 210, 210, 0.25)"
          },
        },
      },
    },
  },
  plugins: [],
};
