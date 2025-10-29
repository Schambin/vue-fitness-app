/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Eczar', 'serif'],
        display: ['Grenze', 'serif'],
      },
      colors: {
        background: {
          primary: '#ffffff',
          tertiary: '#dbeafe',
          muted: '#f8fafc',
        },
        color: {
          primary: '#030615',
          link: '#2563eb',
          highlight: '#fef9c3',
        },
        border: {
          primary: '#f1f5f9',
          secondary: '#bed1e7',
          highlight: '#64748b',
        },
        gradient: {
          start: '#9580ff',
          end: '#80ffea',
        },
      },
      borderRadius: {
        sm: '0.5rem',
        lg: '0.75rem',
      },
      boxShadow: {
        soft: '2px 2px 0 0 var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.text-gradient': {
          '@apply bg-gradient-to-br from-gradient-start to-gradient-end text-transparent bg-clip-text': {},
        },
        '.card': {
          '@apply bg-background-muted text-color-primary border border-color-link/10 p-4 rounded-md': {},
        },
        '.card-button': {
          '@apply bg-background-muted text-color-primary border border-border-secondary p-4 rounded-md transition': {},
        },
        '.card-button:hover': {
          '@apply border-border-highlight': {},
        },
        '.card-button-primary': {
          '@apply bg-color-link text-background-primary p-4 rounded-md transition': {},
        },
        '.card-button-secondary': {
          '@apply bg-color-link/10 text-color-link p-4 rounded-md transition': {},
        },
        '.card-button-primary:hover, .card-button-secondary:hover': {
          '@apply opacity-60': {},
        },
      });
    },
  ],
};
