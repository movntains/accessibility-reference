<template>
  <div class="text-gray-900">
    <h1
      class="page-heading"
      v-text="'Form Tips'"
    />
    <FormLabelsSection />
    <FocusRingsSection />
  </div>
</template>

<script type="text/babel">
import FocusRingsSection from '@/components/sections/forms/FocusRingsSection'
import FormLabelsSection from '@/components/sections/forms/FormLabelsSection'

export default {
  name: 'FormsPage',
  components: {
    FocusRingsSection,
    FormLabelsSection,
  },
}
</script>
