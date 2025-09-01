/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'from-MAzul',
    'to-indigo-600',
    'from-HMorado',
    'to-purple-800',
    'from-KRojo',
    'to-pink-500',
  ],

  theme: {

    extend: {

      fontFamily: {
        phantom: ["'Bebas Neue'", "cursive"],
        fuentes: ["'Open Sans'", "sans-serif"],
      },

      colors: {

        HMorado: "#711bc2ff",
        Haru: "#8855CC",
        MAzul: "#0326c4bb",
        KRojo: "#D90429",
        SRojo: "#D90429",
        LAzcul: "#1C1427", 
        velvet: "#1C1427",
        royal: "#2D1C5B",
        
      },

    },

  },

  plugins: [

  ],

}

