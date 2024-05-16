/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'ss': '320px',
      'xs': '960px', // новая точка останова для экранов от 320 пикселей
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '4xl': '1920px'
      // ... другие точки останова
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/266a84a5f422c2d7d963881ded08e8c3.png') lightgray 0% 0% / 100px 100px repeat, #0A172C",
      },
      gridTemplateRows: {
        'layout': 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#9b0404',
        'back': '#0A172C',
      },
      fontFamily: {
        main: ['Inter'],
      },
    },
  },
  plugins: [],
}

