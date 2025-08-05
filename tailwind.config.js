/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
  extend: {
    textShadow: {
        neon: '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff',
      },
    keyframes: {
      'fade-in-up': {
        '0%': { opacity: '0', transform: 'translateY(20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },

    },
    animation: {
      'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
    },
  },
},

};
