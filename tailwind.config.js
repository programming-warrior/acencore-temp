/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
   
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(92.12deg, rgba(34, 180, 248, 0.25) 0.47%, rgba(237, 243, 194, 0.25) 136.89%)',
        'gradient2': 'linear-gradient(137.34deg, rgba(0, 119, 194, 0.1) 23.98%, rgba(112, 117, 122, 0.1) 65.73%)',
        'border-gradient':'linear-gradient(40deg, rgba(0, 119, 194, 0.4), rgba(68,112,228,0.05))',
        'gradient-chatbox':'linear-gradient(92.12deg, rgba(34, 180, 248, 0.25) 0.47%, rgba(237, 243, 194, 0.25) 136.89%)',
        'gradient-opacity1': 'linear-gradient(92.12deg, rgba(34, 180, 248, 1) 0.47%, rgba(237, 243, 194, 1) 136.89%)',
        'gradient2-opacity1': 'linear-gradient(137.34deg, rgba(3,23, 35, 1) 23.98%, rgba(17, 32, 42, 1) 65.73%)',
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }),
      animation: {
        gradient: "gradient 8s linear infinite",
        gradient: "gradient 8s linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
      
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
}


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}






