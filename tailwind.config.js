/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        tercery: '#000'
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
        mono: ['Inconsolata', 'monospace'],
      },
      borderRadius: {
        'none': '0',
        'poco': '0.125rem',
        'medio': '0.375rem',
        'mucho': '0.75rem',
      },
      fontSize: {
        'mini': '0.5rem', 
        'pequeño': '0.8rem',  
        'mediano': '1rem',   
        'grande': '1.25rem',  
        'muygrande': '2rem',
      }
    },
  },
  plugins: [],
}
