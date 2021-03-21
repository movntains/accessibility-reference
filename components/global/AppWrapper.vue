<template>
  <div>
    <AppNavigation />
    <div class="flex flex-col flex-1 overflow-hidden">
      <main class="flex-1 z-0 overflow-y-auto focus:outline-none">
        <div class="max-w-7xl mx-auto p-3 sm:p-4 md:p-8">
          <slot name="pageContent" />
        </div>
      </main>
    </div>
  </div>
</template>

<script type="text/babel">
import AppNavigation from '@/components/navigation/AppNavigation'

export default {
  name: 'AppWrapper',
  components: {
    AppNavigation,
  },
}
</script>
