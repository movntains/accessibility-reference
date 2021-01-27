<template>
  <AppSectionWrapper class="text-gray-600">
    <h1
      class="page-heading"
      v-text="'Form Tips'"
    />
    <FormLabelsSection />
    <FocusRingsSection />
  </AppSectionWrapper>
</template>

<script type="text/babel">
import CodeBlockMixin from '@/mixins/CodeBlockMixin'
import AppSectionWrapper from '@/components/global/AppSectionWrapper'
import FocusRingsSection from '@/components/sections/forms/FocusRingsSection'
import FormLabelsSection from '@/components/sections/forms/FormLabelsSection'

export default {
  name: 'FormsPage',
  components: {
    AppSectionWrapper,
    FocusRingsSection,
    FormLabelsSection,
  },
  mixins: [CodeBlockMixin],
}
</script>
