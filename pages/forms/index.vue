<template>
  <div class="container mb-10 text-gray-600">
    <h1
      class="page-heading"
      v-text="'Form Tips'"
    />
    <FormLabelsSection />
    <FocusRingsSection />
  </div>
</template>

<script type="text/babel">
import CodeBlockMixin from '@/mixins/CodeBlockMixin'
import FocusRingsSection from '@/components/sections/forms/FocusRingsSection'
import FormLabelsSection from '@/components/sections/forms/FormLabelsSection'

export default {
  name: 'FormsPage',
  components: {
    FocusRingsSection,
    FormLabelsSection,
  },
  mixins: [CodeBlockMixin],
}
</script>
