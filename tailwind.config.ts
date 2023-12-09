import type { Config } from 'tailwindcss'

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
      }
    },
  },
  plugins: [],
}
export default config
