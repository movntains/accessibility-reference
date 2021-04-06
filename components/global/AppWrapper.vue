<template>
  <div>
    <a
      href="#main"
      class="skip-link"
      v-text="'Skip to main content'"
    />
    <AppNavigation />
    <div class="flex flex-col flex-1 min-h-screen">
      <main
        id="main"
        class="flex-1 z-0 focus:outline-none"
      >
        <div class="max-w-7xl mx-auto p-3 sm:p-4 md:p-8">
          <slot name="pageContent" />
        </div>
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script type="text/babel">
import AppFooter from '@/components/global/AppFooter'
import AppNavigation from '@/components/navigation/AppNavigation'

export default {
  name: 'AppWrapper',
  components: {
    AppFooter,
    AppNavigation,
  },
}
</script>
