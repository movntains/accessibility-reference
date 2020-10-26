<template>
  <div class="container">
    <h1
      class="page-heading"
      v-text="'Accessibility Tips'"
    />
    <p
      class="mb-4"
      v-text="`Making a website accessible doesn't have to be hard. This site contains accessibility tips, and demonstrations of accessible code vs. inaccessible code. Additional examples will be added over time.`"
    />
    <p>
      To test things out with a screen reader on macOS, you can enable VoiceOver by pressing <code>cmd + fn + F5</code>.
    </p>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'IndexPage',
}
</script>
