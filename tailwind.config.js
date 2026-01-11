/** @type {import('tailwindcss').Config} */

const colors = {
  primary: "#ff6b00", // Orange
  secondary: "#ff9100", // Lighter Orange
  accent: "#ff3d00", // Deep Orange/Red-Orange
  background: "#0a0a0f",
  surface: "#1a1a2e",
  card: "#16213e",
  hover: "#1f2937",
  violet: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  cyan: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  magenta: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
  },
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-glow': 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
        'neon-sm': '0 0 10px rgba(168, 85, 247, 0.4), 0 0 20px rgba(6, 182, 212, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};
