<template>
  <section>
    <h2 class="page-subheading">
      Give Every Form Element an Associated <code>&lt;label&gt;</code>
    </h2>
    <p v-text="`Form labels are often left out of designs for stylistic reasons, but they're essential for form accessibility. A label serves as both a click target and a form element's accessible name.`" />
    <div class="my-8">
      <h3 class="my-4">
        Form Element Without a <code>&lt;label&gt;</code>
      </h3>
      <div class="flex flex-col sm:flex-row items-center">
        <div class="flex">
          <input
            type="checkbox"
            class="form-checkbox"
          >
          <span
            class="ml-2"
            v-text="'Receive promotional offers?'"
          />
          </input>
        </div>
        <code class="code-block">
          <span>&lt;input type="checkbox"&gt;</span>
          <br>
          <span class="ml-3">Receive promotional offers?</span>
          <br>
          <span>&lt;/input&gt;</span>
        </code>
      </div>
      <p class="mt-4">
        Try clicking on the "Receive promotional offers?" text. You'll notice that doing so has no effect whatsoever.
      </p>
      <div class="flex flex-col sm:flex-row items-center mt-8">
        <div class="flex">
          <input
            type="checkbox"
            class="form-checkbox mr-2"
          >
          <label>Receive promotional offers?</label>
        </div>
        <code class="code-block">
          <span>&lt;input type="checkbox"&gt;</span>
          <br>
          <span class="ml-3">Receive promotional offers?</span>
          <br>
          <span>&lt;/input&gt;</span>
        </code>
      </div>
      <p class="mt-4">
        Again, clicking on the "Receive promotional offers?" text will have no effect. Additionally, a screen reader will not be able to provide any information about the checkbox other than that it's a checkbox and that it's checked or unchecked.
      </p>
    </div>
    <div class="my-8">
      <h3 class="my-4">
        Form Element with a <code>&lt;label&gt;</code>
      </h3>
      <div class="flex flex-col sm:flex-row items-center">
        <label>
          <input
            type="checkbox"
            class="form-checkbox"
          >
          <span
            class="ml-2"
            v-text="'Receive promotional offers?'"
          />
        </label>
        <code class="code-block">
          <span>&lt;label&gt;</span>
          <br>
          <span class="ml-3">&lt;input type="checkbox"&gt;</span>
          <br>
          <span class="ml-3">Receive promotional offers?</span>
          <br>
          <span>&lt;/label&gt;</span>
        </code>
      </div>
      <p class="mt-4">
        Now try clicking on the "Receive promotional offers?" text. Doing so will now properly toggle the checkbox because the text is a click target for the checkbox. A screen reader will also be able to provide information about the checkbox because the label text is associated with the checkbox.
      </p>
    </div>
  </section>
</template>

<script type="text/babel">
export default {
  name: 'FormLabelsSection',
}
</script>
