/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        secondary: 'var(--font-jamjuree)',
      },

      blur: {
        full: '188px',
      },

      backgroundImage: {
        stripes:
          'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.15) 12.5%, transparent 12.5%, transparent)',
      },

      backgroundSize: {
        stripes: '100% 8px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
