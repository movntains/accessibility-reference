<template>
  <AppSectionWrapper>
    <h1
      class="page-heading"
      v-text="'Quick Tips for Web Accessibility'"
    />
    <TipsList />
  </AppSectionWrapper>
</template>

<script type="text/babel">
import TipsList from '@/components/sections/tips/TipsList'
import AppSectionWrapper from '@/components/global/AppSectionWrapper'

export default {
  name: 'TipsPage',
  components: {
    TipsList,
    AppSectionWrapper,
  },
  head() {
    return {
      title: 'Quick Tips | Accessibility Reference',
    }
  },
}
</script>
