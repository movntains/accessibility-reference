<template>
  <div
    class="w-screen mx-auto py-4 px-4 sm:px-6"
    :class="{ 'flex justify-between border-b border-gray-100': !isLandingPage }"
  >
    <NuxtLink
      v-if="!isLandingPage"
      :to="{ name: 'index' }"
      class="focus:outline-none focus:shadow-outline"
    >
      <SvgLogo class="w-10 h-10" />
    </NuxtLink>
    <ul
      role="menu"
      class="flex flex-col sm:flex-row justify-center items-center"
    >
      <li
        v-if="isLandingPage"
        class="mb-4 sm:mb-0 mr-0 sm:mr-6 font-semibold"
        v-text="'Topics:'"
      />
      <li
        v-for="link in links"
        :key="link.to"
        class="mb-4 sm:mb-0 mr-0 sm:mr-6"
        role="menuitem"
      >
        <NuxtLink
          :to="{ name: link.to }"
          class="desktop-nav__link"
          v-text="link.title"
        />
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
import SvgLogo from '@/components/svg/SvgLogo'

export default {
  name: 'AppDesktopNavigation',
  components: {
    SvgLogo,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  computed: {
    isLandingPage() {
      return this.$route.name === 'index'
    },
  },
}
</script>
