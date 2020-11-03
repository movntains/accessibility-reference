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
        'brand-blue': '#141dcf',
        'brand-green': '#25e8ca',
        'brand-green-dark': '#538579',
        'grey-light': '#EAEDEE',
        'grey-extra-light': '#F8F9FB',
        'grey-dark': '#323539',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/custom-forms'),
  ],
}
