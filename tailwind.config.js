/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E8F4F8',
          100: '#D1E9F1',
          200: '#A3D3E3',
          300: '#75BDD5',
          400: '#47A7C7',
          500: '#2C3E50',
          600: '#233240',
          700: '#1A2630',
          800: '#121920',
          900: '#090D10',
        },
        accent: {
          50: '#FDF4E8',
          100: '#FBE9D1',
          200: '#F7D3A3',
          300: '#F3BD75',
          400: '#EFA747',
          500: '#E67E22',
          600: '#B8651B',
          700: '#8A4C14',
          800: '#5C320D',
          900: '#2E1907',
        },
        dad: {
          bg: '#E3F2FD',
          border: '#2196F3',
        },
        mom: {
          bg: '#FCE4EC',
          border: '#E91E63',
        },
        joint: {
          bg: '#E8F5E9',
          border: '#4CAF50',
        },
        drive: {
          bg: '#FFF3E0',
          border: '#FF9800',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}



