/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
      container: {
        center: true,
        padding: '16px'
      },
      animation: {
        blob: "blob 5s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(-30px, -50px) scale(1.2)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(1.1)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(0.9)",
          }
        }
      },
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#64748b',
        dark : '#0f172a',
      },
      screens: {
        ss: '480px',
        '2xl': "1320px",
      }
    },
  },
  plugins: [],
}

