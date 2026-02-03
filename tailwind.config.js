/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0033", // Neon Red
        secondary: "#0F0F0F", // Very Dark Gray
        dark: "#050505", // Deep Black
        light: "#FFFFFF",
        "surface-dark": "rgba(20, 20, 20, 0.8)",
        "glass-border": "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-overlay': 'linear-gradient(to top, #050505 0%, transparent 60%, rgba(0,0,0,0.7) 100%)',
      },
    },
  },
  plugins: [],
}
