<template>
  <section class="mt-16">
    <h2
      class="page-subheading"
      v-text="'Semantics and the Accessibility Tree'"
    />
    <p class="my-6">
      Assistive technologies interact with the <em>accessibility tree</em>. When an assistive technology, such as a screen reader, is being used, the browser turns the DOM tree into a form that's useful to the assistive technology. This modified version of the DOM tree is the accessibility tree. The browser can do this because most DOM elements have an <em>implicit</em> semantic meaning, due to the fact that the DOM uses native HTML elements that the browser recognizes and that have predictable behavior on a variety of platforms. This built-in accessibility means that accessibility for native HTML elements (e.g., links and buttons) can be handled <em>automatically</em>.
    </p>
    <p class="my-6">
      In order to determine which elements to add to the accessibility tree, the browser inspects each DOM node and determines if it's semantically "interesting"; if it is, the node is added to the accessibility tree. Assistive technologies then "walk" the accessibility tree, using it to provide an alternative UI to the user.
    </p>
    <p class="my-6">
      Semantically "uninteresting" nodes (e.g., <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>) are often <em>removed</em> from the accessibility tree, especially if their only purpose is to position their children with CSS. For example, if a <code>&lt;button&gt;</code> is nested inside of 5 <code>div</code>s, the browser will likely remove some of the <code>div</code>s in the middle in order to reduce noise.
    </p>
  </section>
</template>

<script type="text/babel">
export default {
  name: 'AccessibilityTree',
}
</script>
