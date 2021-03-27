<template>
  <AppSectionWrapper class="text-gray-600">
    <template #sidebar>
      <AppSidebarNavigation :links="links" />
    </template>
    <h1
      class="page-heading"
      v-text="'How to Make Accessible Buttons'"
    />
    <p
      class="my-6"
      v-text="`Buttons are some of the most common and numerous elements of a website, and they perform many different functions. Therefore, it's important that they're coded properly so that users of assistive technologies can interact with them.`"
    />
    <IconButtonsSection id="icon-buttons" />
  </AppSectionWrapper>
</template>

<script type="text/babel">
import CodeBlockMixin from '@/mixins/CodeBlockMixin'
import AppSectionWrapper from '@/components/global/AppSectionWrapper'
import AppSidebarNavigation from '@/components/navigation/AppSidebarNavigation'
import IconButtonsSection from '@/components/sections/buttons/IconButtonsSection'

export default {
  name: 'ButtonsPage',
  components: {
    AppSectionWrapper,
    IconButtonsSection,
    AppSidebarNavigation,
  },
  mixins: [CodeBlockMixin],
  data() {
    return {
      links: [
        {
          to: 'icon-buttons',
          text: 'Icon Buttons',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Buttons | Accessibility Reference',
    }
  },
}
</script>
