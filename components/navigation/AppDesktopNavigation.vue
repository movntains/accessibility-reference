<template>
  <nav class="hidden lg:flex">
    <ul
      role="menu"
      class="flex justify-between items-center space-x-10"
    >
      <li>
        <AppSubnavigation />
      </li>
      <li
        v-for="link in links"
        :key="link.to"
        role="menuitem"
      >
        <NuxtLink
          :to="{ name: link.to }"
          class="desktop-nav__link"
          v-text="link.title"
        />
      </li>
    </ul>
  </nav>
</template>

<script type="text/babel">
import AppSubnavigation from '@/components/navigation/AppSubNavigation'

export default {
  name: 'AppDesktopNavigation',
  components: {
    AppSubnavigation,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>
