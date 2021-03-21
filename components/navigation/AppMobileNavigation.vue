<template>
  <div class="md:hidden h-full">
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
          class="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-white"
        >
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button
              class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:shadow-outline-indigo"
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
              <div class="flex items-center flex-shrink-0 py-5 pl-5 pr-4">
                <NuxtLink
                  :to="{ name: 'index' }"
                  class="app-navigation__heading"
                >
                  <SvgLogo class="w-auto h-10" />
                </NuxtLink>
              </div>
              <ul
                id="dashboard-mobile-nav-list"
                class="mt-5 px-4"
                role="menu"
                @keydown.esc="toggleMobileNav"
              >
                <li
                  v-for="javascriptLink in javascriptLinks"
                  :key="javascriptLink.title"
                  class="my-2"
                  role="menuitem"
                >
                  <NuxtLink
                    :to="{ name: javascriptLink.to }"
                    class="group app-navigation__link my-2"
                    v-text="javascriptLink.title"
                  />
                </li>
                <li
                  v-for="link in links"
                  :key="link.title"
                  class="my-2"
                  role="menuitem"
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
import SvgLogo from '@/components/svg/SvgLogo'

export default {
  name: 'AppMobileNavigation',
  components: {
    SvgLogo,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      listItems: [],
      javascriptLinks: [
        {
          to: 'drag-drop',
          title: 'Drag-and-Drop',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      windowWidth: state => state.ui.windowWidth,
      mobileNavIsOpen: state => state.ui.mobileNavIsOpen,
    }),
    focusableItems() {
      return [
        document.querySelector('body'),
        document.getElementById('show-mobile-nav'),
      ]
    },
  },
  watch: {
    '$route'() {
      if (this.mobileNavIsOpen) {
        this.toggleMobileNav()

        // Make background elements focusable again
        this.$accessibility.setBackgroundElementFocus(0, this.focusableElements)
      }
    },
    windowWidth(newVal, oldVal) {
      if (newVal <= 768) {
        this.setNavLinksFocus(-1)
      } else {
        this.setNavLinksFocus(0)
      }
    },
    mobileNavIsOpen(newVal, oldVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.getListItems()

          // Prevent elements outside of the mobile nav from being focusable while it's open
          this.$accessibility.setBackgroundElementFocus(-1, this.focusableItems)

          // Make nav links focusable while mobile nav is open
          this.setNavLinksFocus(0)

          // Focus the first nav link
          this.listItems[0].focus()
        })
      } else {
        this.$accessibility.setBackgroundElementFocus(0, this.focusableItems)
        this.setNavLinksFocus(-1)
      }
    },
  },
  methods: {
    ...mapMutations({
      toggleMobileNav: 'ui/TOGGLE_MOBILE_NAV',
    }),
    setNavLinksFocus(tabIndex) {
      this.listItems.forEach((element) => {
        element.setAttribute('tabindex', tabIndex)
      })
    },
    getListItems() {
      const ul = document.getElementById('dashboard-mobile-nav-list')

      ul.querySelectorAll('li').forEach((item) => {
        item.setAttribute('role', 'menuitem')
      })

      this.listItems = [...ul.querySelectorAll('li a')]
    },
  },
}
</script>
