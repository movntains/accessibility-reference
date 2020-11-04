<template>
  <div class="container mb-10 text-gray-600">
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
