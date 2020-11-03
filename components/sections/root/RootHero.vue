<template>
  <div class="relative overflow-hidden">
    <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
      <div class="text-center">
        <h2 class="mb-4 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Tips and demos to help improve your
          <br class="xl:hidden">
          <span class="text-brand-blue">website accessibility</span>
        </h2>
        <p
          class="mt-3 max-w-md mx-auto text-left sm:text-center text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          v-text="`Making a website accessible doesn't have to be hard. This site contains accessibility tips and demonstrations of accessible code vs. inaccessible code. Additional examples will be added over time.`"
        />
        <p class="mt-3 max-w-md mx-auto text-left sm:text-center text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          To test things out with a screen reader on macOS, you can enable VoiceOver by pressing <code>cmd + fn + F5</code>.
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <NuxtLink
              :to="{ name: 'blogs' }"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-brand-blue bg-white border-brand-blue hover:bg-brand-blue hover:text-white focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              v-text="'Read Our A11y Posts'"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'RootHero',
}
</script>
