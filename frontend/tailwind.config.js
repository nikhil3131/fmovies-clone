/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homepageImage': "url('./src/assets/images/homepageImage.jpg')"
      },
      colors: {
        'f-blue': '#00ACC1',
        'f-light-blue': '#00bcc1',
        'f-dark-gray' : '#181818',
        'f-light-gray' : '#292929',
        'f-dark-zinc' : '#464646',
        'f-light-zinc' : '#AEAEAE',
      },
    },
  },
  plugins: [],
}