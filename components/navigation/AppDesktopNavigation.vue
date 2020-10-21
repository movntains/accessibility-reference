<template>
  <div
    id="dashboard-desktop-nav"
    class="flex flex-col w-64 bg-gray-800"
  >
    <div class="flex-1 flex flex-col pb-4 overflow-y-auto">
      <div class="flex items-center flex-shrink-0 py-5 px-4 bg-gray-900">
        <NuxtLink
          :to="{ name: 'index' }"
          class="app-navigation__heading"
          v-text="'A11y Tips'"
        />
      </div>
      <nav
        id="desktop-nav-items"
        class="flex-1 mt-5 px-4 bg-gray-800 space-y-1"
      >
        <ul role="menu">
          <li
            v-for="link in links"
            :key="link.title"
            class="my-2"
            role="menuitem"
          >
            <NuxtLink
              :to="{ name: link.to }"
              class="group app-navigation__link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-4 h-4 mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span v-text="link.title" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'AppDesktopNavigation',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>
