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
        primary:      '#1E6FB7',
        secondary:    '#4FA7E0',
        dark:         '#0a1628',
        navy:         '#0a1628',
        'navy-mid':   '#152238',
        'navy-light': '#1e3a5f',
        muted:        '#6B7280',
        bg:           '#F3F4F6',
        card:         '#FFFFFF',
        accent:       '#1E6FB7',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':   'linear-gradient(135deg, #1E6FB7, #4FA7E0)',
        'brand-gradient-r': 'linear-gradient(135deg, #4FA7E0, #1E6FB7)',
        'navy-gradient':    'linear-gradient(135deg, #0a1628, #1e3a5f)',
      },
      borderRadius: {
        DEFAULT: '8px',
        sm:  '6px',
        md:  '12px',
        lg:  '20px',
        xl:  '16px',
        '2xl': '20px',
      },
      boxShadow: {
        card:       '0 2px 16px 0 rgba(30,111,183,0.08)',
        'card-hover':'0 8px 32px 0 rgba(30,111,183,0.18)',
        accent:     '0 4px 20px rgba(30, 111, 183, 0.30)',
      },
    },
  },
  plugins: [],
}
