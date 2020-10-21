export const state = () => ({
  windowWidth: null,
  mobileNavIsOpen: false,
})

export const mutations = {
  /**
   * @param {object} state
   * @param {number} width
   * @constructor
   */
  SET_WINDOW_WIDTH: (state, width) => (state.windowWidth = width),

  /**
   * @param {object} state
   * @constructor
   */
  RESET_MOBILE_NAV: state => (state.mobileNavIsOpen = false),

  /**
   * @param {object} state
   * @constructor
   */
  TOGGLE_MOBILE_NAV: state => (state.mobileNavIsOpen = !state.mobileNavIsOpen),
}
