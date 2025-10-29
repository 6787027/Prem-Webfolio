
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
  
        flare: 'flare 8s infinite linear',
      },
      keyframes: {
        flare: {
          '0%, 100%': { transform: 'translate(-10%, -10%) scale(1.2)' },
          '25%': { transform: 'translate(90%, -10%) scale(1)' },
          '50%': { transform: 'translate(90%, 90%) scale(1.2)' },
          '75%': { transform: 'translate(-10%, 90%) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}