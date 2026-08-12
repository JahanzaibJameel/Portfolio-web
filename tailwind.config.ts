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
        primary: {
          50: '#eef7ff',
          100: '#d9ebff',
          200: '#b8d4ff',
          300: '#84b0ff',
          400: '#5485ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
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
        display: ['var(--font-inter-tight)', 'var(--font-jetbrains-mono)'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backdropBlur: {
        xl: '20px',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
};