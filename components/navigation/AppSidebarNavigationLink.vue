<template>
  <NuxtLink
    :to="`#${link.to}`"
    class="app-sidebar-navigation__item"
  >
    <span
      class="truncate"
      v-text="link.text"
    />
  </NuxtLink>
</template>

<script type="text/babel">
export default {
  name: 'AppSidebarNavigationLink',
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$route.hash.includes(this.link.to)
    },
  },
}
</script>
