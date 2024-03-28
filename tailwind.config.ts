import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Lexend": ["Lexend-R", "sans-serif"],
        "Lexend-B": ["Lexend-B", "sans-serif"],
        "Outfit": ["Outfit-R", "sans-serif"],
        "Outfir-B": ["Outfir-B", "sans-serif"],
      },
      colors: {
        'faff-pink': "rgb(255 175 243)",
        'brown-pink': "rgb(88 67 85)",
        'white-fefe': "rgb(254 254 252)"
      }
    },
    fontSize: {
      'small': "0.8rem",
      'code': '1rem',
      'normal': '1.1rem',
      'navbar': '1.1rem',
      'hero-button': '1.5rem',
      'pair-text': '1.3rem',
      'friendly-text': '1.5rem',
      'still-here-subtitle': '1.5rem',
      'still-here-button': '1.5rem',
      'logo': '1.8rem',
      'hero': '2rem',
      'pair-title': '2rem',
      'hero-title': '2rem',
      'still-here-title': '2rem',
      'footer-logo': '2rem',
      'friendly-title': '3rem',
      'sponsore-title': '3rem'
    }
  },
  plugins: [],
};
export default config;
