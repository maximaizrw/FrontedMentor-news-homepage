/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        'primary-soft-orange': 'hsl(35, 77%, 62%)',
        'primary-soft-red': 'hsl(5, 85%, 63%)',
        'neutral-off-white': 'hsl(36, 100%, 99%)',
        'neutral-grayish-blue': 'hsl(233, 8%, 79%)',
        'neutral-dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'neutral-very-dark-blue': 'hsl(240, 100%, 5%)',
      },
      fontSize: {
        '15': '15px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
          
      },
    },
  },

  plugins: [],
}