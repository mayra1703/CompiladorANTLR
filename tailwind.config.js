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
      lightYellow:'#fadc71',
      darkYellow:'#ffd500',
      darkBlue: '#001233',
      slate: '#e9ecef',
      white: '#ffffff',
      claro: '#edf6f9',
      lightRed: '#f29479',
      red: '#cb1b16',
      darkRed: '#a4161a',
      lila: '#8083cf',
      darkPurple: '#1f2135',
      lightPurple: '#41436a',
      inicioGradiente: '#4b6cb7',
      finalGradiente: '#182848',
    },
  },
  plugins: [],
}
