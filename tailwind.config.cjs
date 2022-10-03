/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily:{
      sans:['Inter', 'Sans-serif']
    },
    extend: {
      backgroundImage: {
        fundo:"url('Fundo.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, ##9572fc 23.08%, #43e7ad 33.94%, #e1d55d 44.57%)',
        'game-gradient':'linear-gradient(180deg, rgba(0,0,0,0)0%, rgba(0,0,0,0.9)667.08%);'
      },

    },
  },
  plugins: [],
}
