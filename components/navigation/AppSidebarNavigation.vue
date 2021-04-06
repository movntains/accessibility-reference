<template>
  <div class="relative hidden lg:block flex-shrink-0 -mt-8">
    <div class="sticky top-0 mt-3 p-4 pl-0 pt-8">
      <p
        class="font-bold text-xs text-gray-500 uppercase tracking-widest"
        v-text="'On This Page'"
      />
      <nav
        class="space-y-1"
        aria-label="Sidebar Navigation"
      >
        <AppSidebarNavigationLink
          v-for="link in links"
          :key="link.to"
          :link="link"
        />
      </nav>
    </div>
  </div>
</template>

<script type="text/babel">
import AppSidebarNavigationLink from '@/components/navigation/AppSidebarNavigationLink'

export default {
  name: 'AppSidebarNavigation',
  components: {
    AppSidebarNavigationLink,
  },
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>
