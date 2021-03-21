const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
      center: true,
    },
    customForms: theme => ({
      default: {
        input: {
          fontSize: theme('fontSize.sm'),
          color: theme('colors.gray.700'),
          borderRadius: theme('borderRadius.sm'),
          backgroundColor: theme('colors.gray.100'),
          '&:focus': {
            backgroundColor: theme('colors.white'),
          },
        },
        select: {
          boxShadow: theme('boxShadow.default'),
          borderRadius: theme('borderRadius.sm'),
        },
        checkbox: {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
        },
      },
    }),
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: '#282B2C',
        'brand-teal': '#004970',
        'brand-blue': '#4876D6',
        'brand-green': '#25e8ca',
        'brand-green-dark': '#538579',
        'grey-light': '#EAEDEE',
        'grey-extra-light': '#F8F9FB',
        'grey-dark': '#323539',
        cyan: {
          50: '#ebfeff',
          100: '#dbfcff',
          200: '#a4f5fe',
          300: '#4be4fb',
          400: '#06c8ea',
          500: '#06a3c6',
          600: '#0b84a2',
          700: '#0f6580',
          800: '#12576e',
          900: '#164e64',
        },
      },
      boxShadow: {
        'outline-teal': '0 0 0 3px rgba(22, 78, 100, 0.45)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/custom-forms'),
  ],
}
