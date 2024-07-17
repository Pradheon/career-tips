/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('../img/unsplash-work-1.jpg')",
        'geo-bg': "url('../img/unsplash-geo-bg.jpg')"
      }
    },
  },
  plugins: [],
}

