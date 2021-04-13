<template>
  <AppSectionWrapper class="text-gray-600">
    <template #sidebar>
      <AppSidebarNavigation :links="links" />
    </template>
    <h1
      class="page-heading"
      v-text="'The Basics of Web Accessibility'"
    />
    <p class="my-6">
      You've no doubt heard the term "accessibility" in relation to a website or web application. But what does that actually mean? In short, if a website is accessible, it can be operated by anyone, including by those who aren't in the narrow range of "typical users". An accessible website can be accessed and operated by users with an impairment or disability, be it temporary, permanent, physical, or non-physical.
    </p>
    <Affordances id="affordances" />
    <AccessibilityTree id="accessibility-tree" />
  </AppSectionWrapper>
</template>

<script type="text/babel">
import Affordances from '@/components/sections/basics/Affordances'
import AppSectionWrapper from '@/components/global/AppSectionWrapper'
import AccessibilityTree from '@/components/sections/basics/AccessibilityTree'
import AppSidebarNavigation from '@/components/navigation/AppSidebarNavigation'

export default {
  name: 'BasicsPage',
  components: {
    Affordances,
    AccessibilityTree,
    AppSectionWrapper,
    AppSidebarNavigation,
  },
  data() {
    return {
      links: [
        {
          to: 'affordances',
          text: 'Affordances & Semantics',
        },
        {
          to: 'accessibility-tree',
          text: 'The Accessibility Tree',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Basics | Accessibility Reference',
    }
  },
}
</script>
