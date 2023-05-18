/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primary:'rgb(43,42,51)',
        secondary:'rgb(41,41,41)',
        headers:'rgb(28,27,34)',
        text:'rgb(255,255,255)',
      }
    },
  },
  plugins: [],
}

