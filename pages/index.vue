<template>
  <div>
    <RootHero />
  </div>
</template>

<script type="text/babel">
import RootHero from '@/components/sections/root/RootHero'

export default {
  name: 'IndexPage',
  layout: 'landing',
  components: {
    RootHero,
  },
}
</script>
