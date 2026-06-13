/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: {
          red: '#C41E1E',
          'red-dark': '#9B1818',
          orange: '#E06B1C',
        },
        // Primary (Petroleum Blue)
        primary: {
          50: '#E6F4F6',
          100: '#C3E3E8',
          200: '#90CAD5',
          300: '#5CAABE',
          400: '#3B8DA3',
          500: '#267288',
          600: '#1F5A6D',
          700: '#1A4958',
          800: '#173C48',
          900: '#16323D',
          950: '#0D2028',
        },
        // Neutrals (Industrial Graphite)
        gray: {
          50: '#F5F7F8',
          100: '#E9EDEF',
          200: '#D0D7DA',
          300: '#AAB7BC',
          400: '#7E9098',
          500: '#61747C',
          600: '#4C5B62',
          700: '#3E4A50',
          800: '#353E43',
          900: '#2E3539',
          950: '#1E2326',
        },
        // WhatsApp
        whatsapp: {
          DEFAULT: '#128C7E', // Accessible green (contrast 4.87:1 with white text)
          dark: '#075E54', // Darker hover green (contrast 7.59:1 with text-white)
          light: '#DCF8C6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(30, 41, 59, 0.08)',
        'card-hover': '0 8px 24px rgba(30, 41, 59, 0.12)',
        section: '0 0 0 1px rgba(30, 41, 59, 0.06)',
        cta: '0 4px 14px rgba(31, 90, 109, 0.35)',
        whatsapp: '0 4px 14px rgba(18, 140, 126, 0.40)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
}

export default config
