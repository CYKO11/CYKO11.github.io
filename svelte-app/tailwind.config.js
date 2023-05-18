/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primary:'rgb(17,17,17)',
        secondary:'rgb(41,41,41)',
        headers:'rgb(69,79,255)',
        text:'rgb(255,255,255)',
      }
    },
  },
  plugins: [],
}

