/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      lightYellow:'#fdd85d',
      darkYellow:'#d9dcd6',
      darkBlue: '#001233',
      light: '#e2e8f0',
      slate: '#e9ecef',
      brownPink: '#7d4f50',
      darkRose: '#cc8b86',
      white: '#ffffff',
      claro: '#f9eae1',
      lightRed: '#f29479',
      red: '#cb1b16',
      darkRed: '#a4161a',
    },
  },
  plugins: [],
}
