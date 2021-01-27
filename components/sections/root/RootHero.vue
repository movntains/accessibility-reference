<template>
  <div>
    <main class="max-w-screen-lg mt-10 sm:mt-12 md:mt-16 lg:mt-20 mx-auto px-4 sm:px-6">
      <SvgWordLogo class="w-64 h-32 sm:w-auto sm:h-auto mx-auto mb-8" />
      <div class="text-center">
        <h2 class="mb-8 text-4xl sm:text-5xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
          A free guide to
          <br class="xl:hidden">
          <span class="text-brand-blue">website accessibility</span>
        </h2>
        <p
          class="mt-3 max-w-md mx-auto text-left sm:text-center text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          v-text="`Making a website accessible doesn't have to be hard. Browse tips and demos to learn how you can improve the accessibility of the sites you build.`"
        />
      </div>
    </main>
    <div class="flex justify-center items-center w-screen my-10 py-6 banner">
      <div class="flex flex-col sm:flex-row justify-center items-center">
        <p
          class="text-lg text-white font-semibold mb-8 sm:mr-8 sm:mb-0"
          v-text="'Check out some accessibility blog posts.'"
        />
        <NuxtLink
          :to="{ name: 'blogs' }"
          class="px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-brand-blue bg-white shadow-lg focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:text-lg transform hover:scale-105 hover:shadow-xl"
          v-text="'View Blog List'"
        />
      </div>
    </div>
    <div class="w-screen mt-10 mx-auto px-4 sm:px-6">
      <AppDesktopNavigation :links="navLinks" />
    </div>
  </div>
</template>

<script type="text/babel">
import links from '@/services/nav-links'
import SvgWordLogo from '@/components/svg/SvgWordLogo'
import AppDesktopNavigation from '@/components/navigation/AppDesktopNavigation'

export default {
  name: 'RootHero',
  components: {
    SvgWordLogo,
    AppDesktopNavigation,
  },
  data() {
    return {
      navLinks: links,
    }
  },
}
</script>

<style scoped>
.banner {
background-color: #6c72e1;
background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23141dcf' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
