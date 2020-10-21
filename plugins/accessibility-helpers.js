import accessibilityHelpers from '@/services/accessibility'

export default (context, inject) => {
  context.$accessibility = accessibilityHelpers

  inject('accessibility', accessibilityHelpers)
}
