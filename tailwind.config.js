/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Eczar', 'serif'],
        display: ['Grenze', 'serif'],
      },
      colors: {
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
          tertiary: 'var(--background-tertiary)',
          accent: 'var(--background-accent)',
          compliment: 'var(--background-compliment)',
          muted: 'var(--background-muted)',
        },
        color: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
          accent: 'var(--color-accent)',
          compliment: 'var(--color-compliment)',
          muted: 'var(--color-muted)',
          link: 'var(--color-link)',
          'link-transparent': 'var(--color-link-transparent)',
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)',
          info: 'var(--color-info)',
          highlight: 'var(--color-highlight)',
        },
        border: {
          primary: 'var(--border-primary)',
          secondary: 'var(--border-secondary)',
          highlight: 'var(--border-highlight)',
          tertiary: 'var(--border-tertiary)',
        },
        gradient: {
          start: 'var(--gradient-start)',
          end: 'var(--gradient-end)',
        },
      },
      borderRadius: {
        sm: 'var(--border-radius-small)',
        lg: 'var(--border-radius-large)',
        highlight: 'var(--highlight-border-radius)',
      },
      padding: {
        small: 'var(--padding-small)',
        large: 'var(--padding-large)',
      },
      boxShadow: {
        soft: '2px 2px 0 0 var(--border-secondary)',
        dark: 'var(--shadow-dark)',
        light: 'var(--shadow-light)',
        text: 'var(--shadow-text)',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.text-gradient': {
          '-webkit-text-fill-color': 'transparent',
          '-webkit-background-clip': 'text',
          'background-image': 'linear-gradient(135deg, var(--gradient-start) 0, var(--gradient-end) 100%)',
          'background-size': '100%',
          '-webkit-box-decoration-break': 'clone',
        },
        '.card': {
          'background-color': 'var(--background-muted)',
          'color': 'var(--color-primary)',
          'padding': '1rem',
          'border-radius': '0.5rem',
          'border': '1px solid var(--color-link-transparent)',
        },
        '.card-button': {
          'background-color': 'var(--background-muted)',
          'color': 'var(--color-primary)',
          'padding': '1rem',
          'border-radius': '0.5rem',
          'border': '1px solid var(--border-secondary)',
          'box-shadow': 'none',
          'transition': 'all 200ms',
        },
        '.card-button:hover': {
          'transform': 'translate(0)',
          'box-shadow': 'none',
          'border-color': 'var(--border-highlight)',
        },
        '.card-button-primary': {
          'color': 'var(--background-primary)',
          'background': 'var(--color-link)',
          'padding': '1rem',
          'border-radius': '0.5rem',
          'border': 'none',
          'box-shadow': 'none',
        },
        '.card-button-secondary': {
          'color': 'var(--color-link)',
          'background': 'var(--color-link-transparent)',
          'padding': '1rem',
          'border-radius': '0.5rem',
          'border': 'none',
          'box-shadow': 'none',
        },
        '.card-button-primary:hover, .card-button-secondary:hover': {
          'transform': 'none',
          'opacity': '0.6',
        },
        '.link-button': {
          'border': 'none',
          'color': 'var(--color-link)',
          'box-shadow': 'none',
          'padding': '0',
        },
        '.link-button:hover': {
          'box-shadow': 'none',
          'transform': 'unset',
          'text-decoration': 'underline',
        },
      });
    },
  ],
};
