<template>
  <div class="h-screen flex overflow-hidden bg-gray-50">
    <AppNavigation />
    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <AppMobileNavToggler />
      <main class="relative flex-1 z-0 overflow-y-auto focus:outline-none">
        <div class="max-w-7xl mx-auto p-3 sm:p-4 md:p-8">
          <slot name="pageContent" />
        </div>
      </main>
    </div>
  </div>
</template>

<script type="text/babel">
import AppNavigation from '@/components/navigation/AppNavigation'
import AppMobileNavToggler from '@/components/navigation/AppMobileNavToggler'

export default {
  name: 'AppWrapper',
  components: {
    AppNavigation,
    AppMobileNavToggler,
  },
}
</script>
