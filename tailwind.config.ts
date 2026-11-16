/* eslint-disable import/no-anonymous-default-export */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: '#ecFEFF',
          100: '#CFF7FF',
          200: '#99EFFF',
          300: '#66E5FF',
          400: '#33DBFF',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0F766E',
          800: '#115D5A',
          900: '#134E4A',
        },
        purple: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D96',
        },
      },
      fontFamily: {
        display: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xl: '20px',
      },
    },
  },
  plugins: [],
};