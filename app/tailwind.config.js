/**
 * Tailwind v4: utilitários ativos vêm de `src/index.css` (@theme).
 * Este arquivo documenta os tokens e mantém `content` para compatibilidade com ferramentas.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        'gold-dark': '#8A6A1E',
        black: '#080808',
        dark: '#111111',
        dark2: '#141414',
        capture: '#0E0E0E',
        'white-cream': '#F5F0E8',
        white2: '#D9D0BC',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        condensed: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
    },
  },
}
