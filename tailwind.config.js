/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        nunito: ['Nunito', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'brand-h10': {
          DEFAULT: '4rem',
          sm: '4rem',
          md: '4rem',
          xs: '2rem',
        },
        'brand-h1': [
          '2rem', // mobile base (32px) (was 2rem)
          {
            lineHeight: '2rem',
            fontWeight: '700',
            letterSpacing: '-0.01em',
            '@screen sm': { fontSize: '3rem' }, // 40px
            '@screen md': { fontSize: '3.5rem' },   // 48px
          }
        ],
        'brand-h2': [
          '2rem', // mobile base (24px) (was 1.5rem)
          {
            lineHeight: '2rem',
            fontWeight: '700',
            '@screen sm': { fontSize: '2.5rem' }, // 32px
            '@screen md': { fontSize: '2.5rem' }, // 36px
          }
        ],
        'brand-h3': [
          '1.5rem', // mobile base (18px)
          {
            lineHeight: '2rem',
            fontWeight: '700',
            '@screen sm': { fontSize: '1.375rem' }, // 22px
            '@screen md': { fontSize: '1.5rem' }, // 24px
          }
        ],
        'brand-base': [
          '1.2rem', // 16px
          {
            lineHeight: '1.2rem',
            fontWeight: '300',
            '@screen sm': { fontSize: '1.2rem' }, // 18px
          }
        ],
        'brand-sm': [
          '1rem', // 14px
          {
            lineHeight: '1.25rem',
            fontWeight: '300',
          }
        ],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      colors: {
        'brand-blue': '#0E1593',
        'brand-dark': '#04062D',
        'brand-black': '#0E0E0E',
        'brand-white': '#FFFFFF',
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '::-webkit-scrollbar': { display: 'none' },
        '*': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      });
    },
  ],
};
