/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      jost :["Jost","sans-serif"],
      acme:["Acme","sans-serif"],
      yellowtail:["Yellowtail","sans-serif"],
      inter:["Inter","sans-serif"],
      jhomuria:["Jomhuria","sans-serif"]
    },
    screens: {
      'xs':'420px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
          "main": "#1B76FF",
      },
    },
  },
  plugins: [],
}

