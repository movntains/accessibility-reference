<template>
  <div>
    <div
      class="fixed inset-0 flex z-40"
      :class="{ 'pointer-events-none': !mobileNavIsOpen }"
    >
      <Transition
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="mobileNavIsOpen"
          class="fixed inset-0"
        >
          <div class="absolute inset-0 bg-black bg-opacity-75">
            <!-- placeholder-->
          </div>
        </div>
      </Transition>
      <Transition
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-class="-translate-x-full"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-if="mobileNavIsOpen"
          class="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-gray-800"
        >
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button
              class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-900 focus:shadow-outline"
              aria-label="Close navigation"
              @click="toggleMobileNav"
              @keydown.enter.prevent="toggleMobileNav"
            >
              <svg
                class="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex-1 h-0 overflow-y-auto">
            <nav>
              <div class="flex items-center flex-shrink-0 py-5 px-4 bg-gray-900">
                <NuxtLink
                  :to="{ name: 'index' }"
                  class="app-navigation__heading"
                  v-text="'A11y Tips'"
                />
              </div>
              <ul
                id="dashboard-mobile-nav-list"
                class="mt-5 px-4"
                role="menu"
                @keydown.esc="toggleMobileNav"
              >
                <li
                  v-for="link in links"
                  :key="link.title"
                  class="my-2"
                >
                  <NuxtLink
                    :to="{ name: link.to }"
                    class="group app-navigation__link"
                    v-text="link.title"
                  />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Transition>
      <div
        v-if="mobileNavIsOpen"
        class="flex-shrink-0 w-14"
      >
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'AppMobileNavigation',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState({
      mobileNavIsOpen: state => state.ui.mobileNavIsOpen,
    }),
  },
  watch: {
    '$route'() {
      if (this.mobileNavIsOpen) {
        this.toggleMobileNav()
      }
    },
  },
  methods: {
    ...mapMutations({
      toggleMobileNav: 'ui/TOGGLE_MOBILE_NAV',
    }),
  },
}
</script>
