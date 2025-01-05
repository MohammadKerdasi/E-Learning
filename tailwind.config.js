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
        'Orange/95': '#FFF4E5',
        'Orange/97': '#FFF9F0', 
        'Orange/99': '#FFFDFA',
        'Orange/95': '#FFF4E5',
        'White/100': '#FFFFFF',
        'White/95': '#F1F1F3',
        'White/97': '#F7F7F8',
        'White/99': '#FCFCFD',
        'Grey/10': '#1A1A1A',
        'Grey/15' : '#262626',
        'Grey/20': '#333333',
        'Grey/30': '#4C4C4D',
        'Grey/35': '#59595A',
        'Grey/40': '#656567',
        'Grey/60': '#98989A',
        'Grey/70': '#B3B3B3',
      },
      spacing: {
        '4.5' : '18px',
        '6.8' : '26px',
        '7.5': '30px',
        '5px': '5px',
        '13' : '50px',
        '60': '60px',
        '154': '154px',
        '63': '63px',
        '62': '62px',
        '30px': '30px',
        '100px': '100px',
        '72px': '72px',
        '18' :'74px',
        '13.8' : '54px',
        'paddingBottom150': '150px',
        'paddingBottom100': '100px',
        'paddingBottom50': '50px',
        'largeScreen': '1597px',
        '1860px': '1860px',
      },
      fontSize: {
        '2.5xl' : '28px',
        '4.5xl': '38px',
        '18' :  '18px',
        '1.5xl': '22px',
        '7.5xl': '80px',
        '5.5xl': '50px'
      },
      lineHeight: {
        '27': '27px',
        '42': '42px',
        '8.5': '34px',
        '12.5': '50px',
        '13': '52px',
        '13' : '50px',
        '15' : '60px',
        '25' : '100px',
        '4.5' : '18px',
        '5.5' : '22px',
        '5.6' : '21px',
        '6.5' : '27px',
        '7.5' : '30px',
        '11': '42px',
        '12': '57px',
        '13': '72px',
        '27' : "27px",
        '21' : "21px",
        '36' : '36px',
        
      },
      margin : 
      {
        '23' : "23px",
        '50' : '50px'
      },
      padding :
      {
        'nav' : '132px',
        '8.5' : '34px',
        '60' : '60px',
        '12.5' : '50px',
        '100' : '100px',
        '10' : '10px',
        '6' : '6px',
        '24' : '24px'
      },
      width :
      {
        '54' : '54px',
        '57' : '57.6%'
      },
      gap :
      {
        '50' : '50px'
      },
      screens: {
        'tablet': '391px',
        
        // 'tablet': '640px',


        'laptop': '1024px',


        'desktop': '1441px',
        // => @media (min-width: 1280px) { ... }
      },

      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-233.8%)' },
        },
        'scroll-md': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-139.96%)' },
        },
        'scroll-xl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 13s linear infinite',
        'scroll-md': 'scroll-md 13s linear infinite',
        'scroll-xl': 'scroll-xl 13s linear infinite',
      },
    },
  },
  plugins: [],
}