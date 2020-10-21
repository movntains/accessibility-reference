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
              v-text="link.title"
            />
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
