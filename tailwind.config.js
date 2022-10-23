module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        ps: '0 10px 30px 5px rgba(0, 0, 0, .2)',
        ns: '0 -10px 30px 5px rgba(0, 0, 0, .2)',
      },
    },
    colors: {
      black: '#000000',
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
    screens: {
      tablet: '640px',
      laptop: '1024px',
      laptopHr: '1280px',
      desktop: '1600px',
      desktopHr: '1800px',
    },
  },
  plugins: [],
};
