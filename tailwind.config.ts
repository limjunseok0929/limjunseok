import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      regular: ['regular'],
      thin: ['thin'],
      bold: ['bold'],
      black: ['black'],
    }
  },
  plugins: [],
}
export default config
