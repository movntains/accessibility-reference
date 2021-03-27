<template>
  <div class="flex mx-auto py-10 px-4 sm:px-6 lg:px-0">
    <slot name="sidebar" />
    <div class="max-w-2xl mx-auto">
      <slot />
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'AppSectionWrapper',
}
</script>
