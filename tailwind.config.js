/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        primary: 'Be Vietnam Pro, sans-serif',
      },
      colors: {
        'Orange/50': '#FF9500',
        'Orange/70': '#FFBF66',
        'Orange/75': '#FFCA80',
        'Orange/80': '#FFD599',
        'Orange/90': '#FFEACC',
        'Orange/97': '#FFF9F0',
        'Orange/99': '#FFFDFA',
        'White/95': '#F1F1F3',
        'White/97': '#F7F7F8',
        'White/99': '#FCFCFD',
        'Grey/10': '#1A1A1A',
        'Grey/20': '#333333',
        'Grey/30': '#4C4C4D',
        'Grey/35': '#59595A',
        'Grey/40': '#656567',
        'Grey/60': '#98989A',
        'Grey/70': '#B3B3B3',
      },
      spacing: {
        '7.5': '30px',
      },
      fontSize: {
        '4.5xl': '38px',
        '2.5xl' : '28px',
      },
      lineHeight: {
        '11': '42px',
        '12': '57px',
        '13': '72px',
      },
      screens: {
        // 'tablet': '640px',
        
  
        // 'laptop': '1024px',
     
  
        'desktop': '1440px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}