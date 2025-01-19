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
      boxShadow: {
        "videoLK" : ' 0px 0px 0px 4px #FFF4E5;'
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
        '5px': '5px',
        '2.3': '9px',
        '2.7': '11px',
        '4.5' : '18px',
        '23' : "23px",
        '6.8' : '26px',
        // '30px': '30px',
        '7.5': '30px', //هي بدال 30=30
        '8.5' : '34px',
        // '13' : '50px',
        '12.5' : '50px', //هي بدل 13=50
        '13' : '52px',  
        '13.8' : '54px',
        '15' : '60px', // هي بدل 60=60px
        // '60': '60px',
        '63': '63px',
        '62': '62px',
         // '72px': '72px',
         '17' : '72px', //هي بدل ال 72 =72px 
         '18' :'74px',
        // '100px': '100px',
        // '100' : '100px',
        '25' : '100px',
        '29' : '120px',
        '154': '154px',
        'paddingBottom150': '150px',
        // 'paddingBottom100': '100px',
        // 'paddingBottom50': '50px',
        'largeScreen': '1597px',
        '5-100': '6.5%',
        '5-80': '5%',
        '5.5-30': '5.5%',
        '57' : '57.6%',     
        '1860px': '1860px',
        'nav' : '132px',
        '25' : '100px',
        '2000': '2000px'
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
        '6.5' : '27px',
        // '27': '27px',
        '4.5' : '18px',
        '5.5' : '22px',
        '5.6' : '21px',
        '7.5' : '30px',
        '36' : '36px',
        '11': '42px',
        '11.5': '43px',
        '12': '57px',
        '15' : '60px',
        '13.8': '72px',
        // '42': '42px',
        '8.5': '34px',
        '12.5': '50px',
        '13': '52px',
        // '13' : '50px',
        '25' : '100px',
      },
      margin : 
      {
        // '50' : '50px' استخدمنا بدالها 12.5 بالبادينغ
      },
     
      width :
      {
        // '54' : '54px', استبدلناها ب 13.8
      },
      gap :
      {
        // '50' : '50px' استبدلناها ب 12.5
      },
      screens: {
        'tablet': '391px',
        // 'tablet': '640px',
        // 'laptop': '1024px', نستخدم بدالها lg
        'desktop': '1441px',
        '1600': '1600px',
        '1250': '1250px'
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