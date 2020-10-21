const FOCUSABLE_TAGS = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"]), div[contenteditable="true"]'

/**
 * @param {string} selector
 * @return {array} elements
 */
export const getElements = (selector) => {
  const element = document.querySelector(selector)

  if (element) {
    return [...element.querySelectorAll(FOCUSABLE_TAGS)]
  }

  return []
}

const accessibilityHelpers = {
  focusableTags: FOCUSABLE_TAGS,

  /**
   * @param {number} tabIndex
   * @param {array} focusableElements
   * @return void
   */
  setBackgroundElementFocus: (tabIndex, focusableElements = []) => {
    const elements = [
      ...getElements('main'),
      ...getElements('#dashboard-desktop-nav'),
      ...getElements('#desktop-nav-items'),
      ...focusableElements,
    ]

    elements.forEach((element) => {
      element.setAttribute('tabindex', tabIndex)
    })
  },
}

export default accessibilityHelpers
