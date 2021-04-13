<template>
  <section class="mt-16">
    <h2
      class="page-subheading"
      v-text="'Affordances and Semantics'"
    />
    <p class="my-6">
      Most assistive technologies (e.g., screen readers, braille display, a switch device) rely on <em>programmatically expressed semantics</em> in order to properly interact with a website. To understand that term, one must first understand <em>affordances</em>.
    </p>
    <p class="my-6">
      An affordance is any object that provides its user with the opportunity to perform an action. A good example would be a teapot — its physical design (i.e., the fact that it has a handle) gives the user an idea of how it should be operated. Since you've seen and interacted with other objects with handles, the fact that a teapot has a handle allows you to infer how it should be used.
    </p>
    <p class="my-6">
      When building UIs, CSS is used to add <em>visual affordances</em> (e.g., adding a drop shadow and border to a button to make it look like a "real" button). However, if a user can't see the screen, then visual affordances are not conveyed to them, so the UI must be constructed in such a way that the same affordances are conveyed to assistive technologies.
    </p>
    <p class="my-6">
      <em>Semantics</em>, then, is the <strong>non-visual</strong> exposure of a UI element's affordances.
    </p>
  </section>
</template>

<script type="text/babel">
export default {
  name: 'Affordances',
}
</script>
