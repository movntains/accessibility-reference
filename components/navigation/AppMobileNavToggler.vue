<template>
  <div class="-mr-2 -my-2 lg:hidden">
    <button
      id="show-mobile-nav"
      type="button"
      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:shadow-outline-teal"
      aria-label="Toggle mobile menu"
      :aria-expanded="mobileNavIsOpen"
      @click="toggleMobileNav"
      @keydown.enter.prevent="toggleMobileNav"
    >
      <svg
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
</template>

<script type="text/babel">
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppMobileNavToggler',
  computed: {
    ...mapState({
      mobileNavIsOpen: state => state.ui.mobileNavIsOpen,
    }),
  },
  methods: {
    ...mapMutations({
      toggleMobileNav: 'ui/TOGGLE_MOBILE_NAV',
    }),
  },
}
</script>
