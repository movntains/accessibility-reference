<template>
  <section class="mt-16">
    <h2
      class="page-subheading"
      v-text="'Give Every Form Element an Associated Label'"
    />
    <p
      class="my-6"
      v-text="`Form labels are often left out of designs for stylistic reasons, but they're essential for form accessibility. A label serves as both a click target and a form element's accessible name.`"
    />
    <div class="my-8">
      <h3
        class="page-tertiary-heading"
        v-text="'Inaccessible: Form Element Without a Label'"
      />
      <div class="grid grid-cols-6 gap-2 items-center">
        <div class="col-span-6 mb-4">
          <input
            type="checkbox"
            class="form-checkbox text-teal-700 focus:shadow-outline-teal focus:border-teal-700"
          >
          <span
            class="ml-2"
            v-text="'Receive promotional offers?'"
          />
          </input>
        </div>
        <AppCodeBlock
          :code="inaccessibleCode1"
          class="col-span-6"
        />
      </div>
      <p class="mt-4 mb-10">
        Try clicking on the
        <span
          class="font-semibold text-gray-800"
          v-text="'Receive promotional offers?'"
        />
        text. You'll notice that doing so has no effect whatsoever.
      </p>
      <div class="grid grid-cols-6 gap-2 items-center">
        <div class="col-span-6 mb-4">
          <input
            type="checkbox"
            class="form-checkbox mr-2 text-teal-700 focus:shadow-outline-teal focus:border-teal-700"
          >
          <label>Receive promotional offers?</label>
        </div>
        <AppCodeBlock
          :code="inaccessibleCode2"
          class="col-span-6"
        />
      </div>
      <p class="mt-4">
        Again, clicking on the
        <span
          class="font-semibold text-gray-800"
          v-text="'Receive promotional offers?'"
        />
        text will have no effect. Additionally, a screen reader will not be able to provide any information about the checkbox other than that it's a checkbox and that it's checked or unchecked.
      </p>
    </div>
    <div class="my-8">
      <h3
        class="page-tertiary-heading"
        v-text="'Accessible: Form Element with a Label'"
      />
      <div class="grid grid-cols-6 gap-2 items-center">
        <div class="col-span-6 mb-4">
          <label>
            <input
              type="checkbox"
              class="form-checkbox text-teal-700 focus:shadow-outline-teal focus:border-teal-700"
            >
            <span
              class="ml-2"
              v-text="'Receive promotional offers?'"
            />
          </label>
        </div>
        <AppCodeBlock
          :code="accessibleCode"
          class="col-span-6"
        />
      </div>
      <p class="mt-4">
        Now try clicking on the
        <span
          class="font-semibold text-gray-800"
          v-text="'Receive promotional offers?'"
        />
        text. Doing so will now properly toggle the checkbox because the text is a click target for the checkbox. A screen reader will also be able to provide information about the checkbox because the label text is associated with the checkbox.
      </p>
    </div>
  </section>
</template>

<script type="text/babel">
import AppCodeBlock from '@/components/global/AppCodeBlock'

export default {
  name: 'FormLabelsSection',
  components: {
    AppCodeBlock,
  },
  data() {
    return {
      inaccessibleCode1: `<input type="checkbox">Receive promotional offers?</input>`,
      inaccessibleCode2: `<input type="checkbox">\n<label>Receive promotional offers?</label>`,
      accessibleCode: `<label>\n\t<input type="checkbox">\n\tReceive promotional offers?\n</label>`,
    }
  },
}
</script>
