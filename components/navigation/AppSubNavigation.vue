<template>
  <div class="relative">
    <button
      type="button"
      class="group bg-white inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:shadow-outline-teal"
      aria-haspopup="true"
      aria-controls="subNavItems"
      :aria-expanded="subNavIsOpen"
      :class="subNavIsOpen ? 'text-gray-900' : 'text-gray-500'"
      @click="subNavIsOpen = !subNavIsOpen"
      @keydown.enter.prevent="handleEnterPress"
      @keydown.esc="subNavIsOpen = false"
    >
      <span v-text="'JavaScript Components'" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        class="ml-2 h-5 w-5 group-hover:text-gray-600"
        :class="subNavIsOpen ? 'text-gray-600' : 'text-gray-500'"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <Transition name="fade">
      <div
        v-if="subNavIsOpen"
        class="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
      >
        <div class="rounded-lg shadow-lg border border-gray-400 border-opacity-25 overflow-hidden">
          <div
            id="subNavItems"
            role="menu"
            class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
          >
            <NuxtLink
              :to="{ name: 'drag-drop' }"
              role="menuitem"
              class="app-subnavigation__link"
              @keydown.esc.native="subNavIsOpen = false"
              @keydown.tab.native="handleTabPress"
            >
              <div class="app-subnavigation__link-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <p
                  class="text-base font-medium text-gray-900"
                  v-text="'Drag-and-Drop'"
                />
                <p
                  class="mt-1 text-sm text-gray-500"
                  v-text="'Learn how to make drag-and-drop accessible in Vue.'"
                />
              </div>
            </NuxtLink>
            <div class="app-subnavigation__link">
              <div class="app-subnavigation__link-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <div class="ml-4">
                <p class="flex justify-between items-center text-base font-medium text-gray-900">
                  <span v-text="'Popout Menus'" />
                  <span
                    class="inline-flex items-center px-2 rounded-full text-xs font-medium bg-teal-100 text-teal-800"
                    v-text="'Coming Soon'"
                  />
                </p>
                <p
                  class="mt-1 text-sm text-gray-500"
                  v-text="'Learn how to make accessible popout menus.'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'AppSubnavigation',
  data() {
    return {
      listItems: [],
      subNavIsOpen: false,
    }
  },
  watch: {
    async subNavIsOpen(newVal) {
      if (newVal) {
        await this.$nextTick()

        this.listItems = [...document.getElementById('subNavItems').querySelectorAll('a')]
      }
    },
  },
  beforeMount() {
    window.addEventListener('click', (event) => {
      this.closeMenu(event)
    })
  },
  beforeDestroy() {
    window.removeEventListener('click', this.closeMenu)
  },
  methods: {
    closeMenu(event) {
      if (!this.$el.contains(event.target)) {
        this.subNavIsOpen = false
      }
    },
    handleTabPress(event) {
      const lastListItem = this.listItems[this.listItems.length - 1]

      if (event.target.textContent === lastListItem.textContent) {
        this.subNavIsOpen = false
      }
    },
    handleEnterPress() {
      this.subNavIsOpen = !this.subNavIsOpen

      setTimeout(() => {
        if (this.subNavIsOpen && this.listItems.length) {
          this.listItems[0].focus()
        }
      }, 1)
    },
  },
}
</script>
