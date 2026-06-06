/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brand: {
          50: '#eff8fd',
          100: '#d8eefb',
          200: '#b4def6',
          300: '#80c7ef',
          400: '#47a8e3',
          500: '#3498db',
          600: '#2980b9',
          700: '#226693',
          800: '#21567a',
          900: '#1f4866',
          950: '#152e44',
        },
        ink: {
          50: '#f4f6fa',
          100: '#e6eaf2',
          200: '#cdd6e4',
          300: '#a3b3cc',
          400: '#7289ac',
          500: '#516890',
          600: '#3f5176',
          700: '#344160',
          800: '#2d3850',
          900: '#0c1626',
          950: '#070d18',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(12, 22, 38, 0.04), 0 8px 24px -8px rgba(12, 22, 38, 0.10)',
        card: '0 1px 0 rgba(12, 22, 38, 0.04), 0 18px 40px -20px rgba(12, 22, 38, 0.25)',
        lift: '0 24px 60px -24px rgba(12, 22, 38, 0.35)',
        glow: '0 0 0 1px rgba(52, 152, 219, 0.20), 0 18px 50px -16px rgba(52, 152, 219, 0.45)',
        ring: 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(12,22,38,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,22,38,0.045) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
