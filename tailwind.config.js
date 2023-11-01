/** @type {import('tailwindcss').Config} */

module.exports = {

  content:["./src/**/*.{html,ts}"],

  theme: {

    extend: {

       

animation:{

   upDown:'upDown 3s linear infinite',

   leftRight:'leftRight 3s linear infinite'

},

 

keyframes:{

  upDown:{

    '0%':{paddingTop:'0px'},

    '50%':{paddingTop:'40px'},

    '100%':{paddingTop:'0px'}

  },

  leftRight:{

    '0%':{paddingRight:'0px'},

    '50%':{paddingRight:'40px'},

    '100%':{paddingRight:'0px'}

  }

}

    },

  },

  plugins: [],

}