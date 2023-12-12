import type { Config } from 'tailwindcss'
import  plugin  from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'primary': ['Montserrat', 'sans-serif'],
      'secondary': ['Raleway', 'sans-serif'],
    },
    colors: {
      primary: '#ffffff',
      secondary: '#000000',
      gray: '#dddddd',
      'gray-dark': '#555555',
    },
    extend: {
      backgroundImage: {
        'carousel-pattern-1': "url('/img/slider/1.jpg')",
        'carousel-pattern-2': "url('/img/slider/2.jpg')",
        'carousel-pattern-3': "url('/img/slider/3.jpg')",
        'resume': "url('/img/author_img_2.jpg')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 500ms',
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.7xl'), fontFamily: theme('fontFamily.primary')},
        'h3': { fontSize: theme('fontSize.2xl'), fontFamily: theme('fontFamily.secondary') },
        'h4': { fontSize: theme('fontSize.6xl'), fontFamily: theme('fontFamily.primary')},
        'h5': { fontSize: theme('fontSize.xl'), fontFamily: theme('fontFamily.primary')},
      })
    })
  ],
}
export default config
