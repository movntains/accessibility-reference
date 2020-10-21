<template>
  <div>
    <AppMobileNavigation
      :links="navLinks"
      class="md:hidden h-full"
    />
    <AppDesktopNavigation
      :links="navLinks"
      class="hidden md:flex md:flex-shrink-0 h-full z-50"
    />
  </div>
</template>

<script type="text/babel">
import AppMobileNavigation from '@/components/navigation/AppMobileNavigation'
import AppDesktopNavigation from '@/components/navigation/AppDesktopNavigation'

export default {
  name: 'AppNavigation',
  components: {
    AppMobileNavigation,
    AppDesktopNavigation,
  },
  data() {
    return {
      navLinks: [
        {
          to: 'buttons',
          title: 'Buttons',
        },
        {
          to: 'forms',
          title: 'Forms',
        },
        {
          to: 'images',
          title: 'Images',
        },
        {
          to: 'links',
          title: 'Links',
        },
      ],
    }
  },
}
</script>
