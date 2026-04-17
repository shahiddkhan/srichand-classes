/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#1E6FB7',
        secondary: '#4FA7E0',
        dark:      '#111827',
        muted:     '#6B7280',
        bg:        '#F3F4F6',
        card:      '#FFFFFF',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1E6FB7, #4FA7E0)',
        'brand-gradient-r': 'linear-gradient(135deg, #4FA7E0, #1E6FB7)',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(30,111,183,0.08)',
        'card-hover': '0 8px 32px 0 rgba(30,111,183,0.18)',
      },
    },
  },
  plugins: [],
}
