<template>
  <div>
    <main>
      <div class="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div class="mx-auto max-w-7xl lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div class="lg:py-24">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span
                    class="block"
                    v-text="'A free guide to'"
                  />
                  <span
                    class="block text-cyan-600"
                    v-text="'web accessibility'"
                  />
                </h1>
                <p
                  class="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                  v-text="`Making a website accessible doesn't have to be hard. Browse tips and demos to learn how you can improve the accessibility of the sites you build.`"
                />
              </div>
            </div>
            <div class="mt-0 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <SvgWebAccessibility class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script type="text/babel">
import SvgWebAccessibility from '@/components/svg/illustrations/SvgWebAccessibility'

export default {
  name: 'RootHero',
  components: {
    SvgWebAccessibility,
  },
}
</script>
