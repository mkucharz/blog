module.exports = {
  theme: {
    flex: {
      '72': '1 1 20rem',
    },
    // borderWidth: {
    //   default: '0px',
    // },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    // },
    fontFamily: {
      display: ['Montserrat', 'sans-serif'],
      body: ['Montserrat', 'sans-serif'],
      heading: ['Merriweather','Georgia', 'sans-serif']
    },
    // borderWidth: {
    //   default: '1px',
    //   '0': '0',
    //   '2': '2px',
    //   '4': '4px',
    // },
    extend: {
      colors: {
        primary: '#5c6ac4',
        secondary: '#ecc94b',
        gray: '#333333',
        'footer-gray': '#484848',
        'light-gray': '#e2e8f0',
      },
      //   spacing: {
      //     '96': '24rem',
      //     '128': '32rem',  
    },
    // }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}
