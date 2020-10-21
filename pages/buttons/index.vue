<template>
  <div class="text-gray-900">
    <h1
      class="page-heading"
      v-text="'Button Tips'"
    />
    <IconButtonsSection />
  </div>
</template>

<script type="text/babel">
import IconButtonsSection from '@/components/sections/buttons/IconButtonsSection'

export default {
  name: 'ButtonsPage',
  components: {
    IconButtonsSection,
  },
}
</script>
