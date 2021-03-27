<template>
  <AppSectionWrapper class="text-gray-600">
    <template #sidebar>
      <AppSidebarNavigation :links="links" />
    </template>
    <h1
      class="page-heading"
      v-text="'How to Make Accessible Forms'"
    />
    <p
      class="my-6"
      v-text="`Forms are often some of the most important elements of a website, so it's critical that they be made accessible. Luckily, all it takes to make accessible forms is semantic HTML and a small amount of CSS.`"
    />
    <FormLabelsSection id="labels" />
    <FocusRingsSection id="focus" />
  </AppSectionWrapper>
</template>

<script type="text/babel">
import CodeBlockMixin from '@/mixins/CodeBlockMixin'
import AppSectionWrapper from '@/components/global/AppSectionWrapper'
import FocusRingsSection from '@/components/sections/forms/FocusRingsSection'
import FormLabelsSection from '@/components/sections/forms/FormLabelsSection'
import AppSidebarNavigation from '@/components/navigation/AppSidebarNavigation'

export default {
  name: 'FormsPage',
  components: {
    AppSectionWrapper,
    FocusRingsSection,
    FormLabelsSection,
    AppSidebarNavigation,
  },
  mixins: [CodeBlockMixin],
  data() {
    return {
      links: [
        {
          to: 'labels',
          text: 'Labels',
        },
        {
          to: 'focus',
          text: 'Focus Indicators',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Forms | Accessibility Reference',
    }
  },
}
</script>
