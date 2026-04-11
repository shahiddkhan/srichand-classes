/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4ff',
          100: '#dce6fd',
          200: '#b9ccfb',
          300: '#87a8f8',
          400: '#527ef3',
          500: '#2d59ed',
          600: '#1a3fd1',
          700: '#1530a9',
          800: '#172b89',
          900: '#18296c',
          950: '#111a45',
        },
        slate: {
          50: '#f8fafc',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
