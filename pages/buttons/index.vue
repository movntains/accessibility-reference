<template>
  <AppSectionWrapper class="text-gray-600">
    <h1
      class="page-heading"
      v-text="'Button Tips'"
    />
    <IconButtonsSection />
  </AppSectionWrapper>
</template>

<script type="text/babel">
import CodeBlockMixin from '@/mixins/CodeBlockMixin'
import AppSectionWrapper from '@/components/global/AppSectionWrapper'
import IconButtonsSection from '@/components/sections/buttons/IconButtonsSection'

export default {
  name: 'ButtonsPage',
  components: {
    AppSectionWrapper,
    IconButtonsSection,
  },
  mixins: [CodeBlockMixin],
}
</script>
