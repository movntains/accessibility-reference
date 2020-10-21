<template>
  <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
    <button
      class="h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:shadow-outline focus:bg-gray-200 transition ease-in-out duration-150"
      aria-label="Open navigation"
      @click="toggleMobileNav"
      @keydown.enter.prevent="toggleMobileNav"
    >
      <svg
        class="w-6 h-6"
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
