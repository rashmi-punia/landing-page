/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    extend: {
      fontFamily:{
        'riot':['Protest Riot','sans-serif']
      },
      boxShadow: {
        bottom: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation:{
        drop:"drop 2s linear infinite "
      },
      keyframes:{
        drop:{
          "0%,100%":{
            transform: 'translateY(0)',
            opacity:0.2,
          },
          "25%":{
            transform: 'translateY(26px)  scale(0.4)',
            opacity:0.5,
          },
          "50%":{
            transform: 'translateY(100%) scale(1.3)',
            opacity:1,
            
          },
          "65%":{
            transform: 'translateY(50%)  sclae(1)',
            opacity:0.7,
          },
          "85%":{
            transform: 'translateY(20%) scale(0.7)',
            opacity:0.4,
          },

        }
      },
    },
  },
  plugins: [
    // require('tailwindcss-conic-gradient'),
    require('flowbite/plugin'),

  ],
}

