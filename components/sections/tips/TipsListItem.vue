<template>
  <div class="mb-12">
    <dt
      class="text-lg leading-6 font-medium text-gray-900"
      v-html="tip.heading"
    />
    <dd
      class="mt-2 text-base text-gray-600 leading-7"
      v-html="tip.description"
    />
  </div>
</template>

<script type="text/babel">
export default {
  name: 'TipsListItem',
  props: {
    tip: {
      type: Object,
      required: true,
    },
  },
}
</script>
