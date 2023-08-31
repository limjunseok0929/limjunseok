import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      regular: ['regular'],
      thin: ['thin'],
      bold: ['bold'],
      black: ['black'],
      quenos: ['quenos']
    }
  },
  plugins: [],
}
export default config
