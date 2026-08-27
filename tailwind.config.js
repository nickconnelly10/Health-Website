module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#8e2222',
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d1d1',
          300: '#f4abab',
          400: '#ed7a7a',
          500: '#e14d4d',
          600: '#cc2e2e',
          700: '#ab2525',
          800: '#8e2222',
          900: '#762121',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
