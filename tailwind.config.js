module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '.9rem',
        sm: '1rem',
        md: '1.2rem',
        lg: '1.6rem',
        xl: '1.8rem',
        xxl: '2rem',
      },
      width: {
        auto: 'auto',
        full: '100%',
        300: '300px',
        350: '350px',
        400: '400px',
        450: '450px',
        500: '500px',
        550: '550px',
      },
      boxShadow: {
        ps: '0 10px 20px 5px rgba(0, 0, 0, .3)',
        ns: '0 -10px 20px 5px rgba(0, 0, 0, .3)',
      },
      left: {
        n350: '-350px',
      },
    },
    keyframes: {
      slideRight: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0px)' },
      },
    },
    Animation: {
      slideRight: 'slideRight all 0.2s',
    },
    colors: {
      primary: '#5979fb',
      secondary: '#f2a934',
      white: '#ffffff',
      white2: '#e2e2e2',
      white3: '#c2c2c2',
      grey: '#888888',
      dark0: '#101116',
      dark1: '#181b25',
      dark2: '#1f2330',
      dark3: '#2c3046',
      dark4: '#323a58',
    },
    fontFamily: {
      montserrat: ['montserrat', 'sans-serif'],
    },
    screens: {
      tablet: '640px',
      laptop: '1024px',
      laptopHr: '1280px',
      desktop: '1600px',
    },
  },
  plugins: [],
};
