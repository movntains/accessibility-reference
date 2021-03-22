<template>
  <div class="max-w-7xl p-3 sm:p-4 md:p-8">
    <div class="flex flex-col items-center mb-8">
      <h1
        class="text-5xl text-cyan-600"
        v-text="`Whoops!`"
      />
      <p
        class="text-gray-600"
        v-text="`This page doesn't exist.`"
      />
    </div>
    <SvgNotFound class="w-full h-96 mx-auto" />
  </div>
</template>

<script type="text/babel">
import SvgNotFound from '@/components/svg/illustrations/SvgNotFound'

export default {
  name: 'DefaultLayout',
  components: {
    SvgNotFound,
  },
}
</script>
