module.exports = {
    content: [
      './src/**/*.{html,js}',
    ],
    theme: {
      extend: {
        colors: {
        dark: {
          DEFAULT: '#1a1a1e',
          text: '#cbd5e0',
          },
          backgroundImage: {
            'site-bg': "url('/background.png')",
          },
        },
      },
    },
    plugins: [],
  };  