module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '1rem',
        sm: '1.2rem',
        med: '1.4rem',
        lg: '1.6rem',
        xl: '2rem',
      },
      width: {
        auto: 'auto',
        full: '100%',
      },
      boxShadow: {
        ps: '0 10px 20px 5px rgba(0, 0, 0, .3)',
        ns: '0 -10px 20px 5px rgba(0, 0, 0, .6)',
      },
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
