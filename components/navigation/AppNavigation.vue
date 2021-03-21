<template>
  <header>
    <div class="relative">
      <div class="flex justify-between md:justify-start items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <NuxtLink
            :to="{ name: 'index' }"
            aria-label="Home"
            class="inline-flex focus:outline-none focus:shadow-outline-teal"
          >
            <SvgLogo class="w-auto h-8 sm:h-10" />
          </NuxtLink>
        </div>
        <div>
          <AppMobileNavToggler />
          <AppMobileNavigation :links="navLinks" />
          <AppDesktopNavigation :links="navLinks" />
        </div>
      </div>
    </div>
  </header>
</template>

<script type="text/babel">
import links from '@/services/nav-links'
import SvgLogo from '@/components/svg/SvgLogo'
import AppMobileNavigation from '@/components/navigation/AppMobileNavigation'
import AppMobileNavToggler from '@/components/navigation/AppMobileNavToggler'
import AppDesktopNavigation from '@/components/navigation/AppDesktopNavigation'

export default {
  name: 'AppNavigation',
  components: {
    SvgLogo,
    AppMobileNavigation,
    AppMobileNavToggler,
    AppDesktopNavigation,
  },
  data() {
    return {
      navLinks: links,
    }
  },
}
</script>
