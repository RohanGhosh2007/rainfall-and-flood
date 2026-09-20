/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#E8EDF5',
          100: '#C9D5E8',
          200: '#93AACE',
          300: '#5E7FAE',
          400: '#2E5483',
          500: '#0B1F3A',
          600: '#091A32',
          700: '#07142A',
          800: '#050F22',
          900: '#040A19',
        },
        brand: {
          DEFAULT: '#155EEF',
          50: '#EFF4FF',
          100: '#D1E0FF',
          200: '#B3CCFF',
          300: '#84A9FF',
          400: '#5187FF',
          500: '#155EEF',
          600: '#0E4ED1',
          700: '#0B3EAB',
          800: '#093088',
          900: '#072466',
        },
        surface: {
          DEFAULT: '#F4F7FA',
          card: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#172033',
          secondary: '#667085',
        },
        risk: {
          low: '#12B76A',
          moderate: '#F79009',
          high: '#F04438',
          critical: '#B42318',
          emergency: '#7A271A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(11, 31, 58, 0.06), 0 1px 2px 0 rgba(11, 31, 58, 0.04)',
        'card-hover': '0 4px 12px 0 rgba(11, 31, 58, 0.08), 0 2px 4px 0 rgba(11, 31, 58, 0.04)',
        'card-elevated': '0 8px 24px 0 rgba(11, 31, 58, 0.10), 0 2px 8px 0 rgba(11, 31, 58, 0.04)',
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};
