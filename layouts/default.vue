<template>
  <AppWrapper>
    <template #pageContent>
      <Nuxt />
    </template>
  </AppWrapper>
</template>

<script type="text/babel">
import { mapState, mapMutations } from 'vuex'
import AppWrapper from '@/components/global/AppWrapper'

export default {
  name: 'DefaultLayout',
  components: {
    AppWrapper,
  },
  computed: {
    ...mapState({
      windowWidth: state => state.ui.windowWidth,
    }),
  },
  watch: {
    windowWidth() {
      if (this.windowWidth > 768) {
        this.resetMobileNav()
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    window.addEventListener('keydown', this.onFirstTab)

    this.setWindowWidth(window.innerWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    ...mapMutations({
      setWindowWidth: 'ui/SET_WINDOW_WIDTH',
      resetMobileNav: 'ui/RESET_MOBILE_NAV',
    }),
    onResize(event) {
      this.setWindowWidth(event.target.innerWidth)
    },
    onFirstTab(event) {
      if (event.keyCode === 9) {
        document.body.classList.add('using-keyboard')

        window.removeEventListener('keydown', this.onFirstTab)
      }
    },
  },
}
</script>
