<template>
  <section class="mt-16">
    <h2
      class="page-subheading"
      v-text="`Don't Remove Focus Indicators`"
    />
    <p
      class="my-6"
      v-text="`Focus indicators act as the stand-in for a mouse pointer for keyboard-only users, so they should never be removed with CSS. Instead, they should be styled so that they match the site design. You'll also need to ensure that there's adequate contrast between the focus indicator and the background.`"
    />
    <div class="my-8">
      <h3
        class="page-tertiary-heading"
        v-text="'Inaccessible: Form Elements Without Focus Rings'"
      />
      <div class="grid grid-cols-6 gap-2 items-center">
        <div class="col-span-6 sm:col-span-3">
          <div class="flex flex-col mb-6">
            <label
              for="username"
              class="mb-2 font-medium"
              v-text="'Username'"
            />
            <input
              id="username"
              type="text"
              class="p-2 rounded-sm bg-white border border-gray-200 focus:outline-none"
            >
          </div>
          <div class="flex flex-col">
            <label
              for="password"
              class="mb-2 font-medium"
              v-text="'Password'"
            />
            <input
              id="password"
              type="password"
              class="p-2 rounded-sm bg-white border border-gray-200 focus:outline-none"
            >
          </div>
        </div>
      </div>
      <p
        class="my-4"
        v-text="`Without focus rings, the only way to tell which of these form elements is currently focused is to look for the cursor.`"
      />
    </div>
    <div class="my-8">
      <h3
        class="page-tertiary-heading"
        v-text="'Accessible: Form Elements with Focus Rings'"
      />
      <div class="grid grid-cols-6 gap-2 items-center">
        <div class="col-span-6 sm:col-span-3">
          <div class="flex flex-col mb-4">
            <label
              for="username_accessible"
              class="mb-2 font-medium"
              v-text="'Username'"
            />
            <input
              id="username_accessible"
              type="text"
              class="form-input bg-white focus:shadow-outline-teal focus:border-teal-700"
            >
          </div>
          <div class="flex flex-col">
            <label
              for="password_accessible"
              class="mb-2 font-medium"
              v-text="'Password'"
            />
            <input
              id="password_accessible"
              type="password"
              class="form-input bg-white focus:shadow-outline-teal focus:border-teal-700"
            >
          </div>
        </div>
      </div>
      <p
        class="mt-4"
        v-text="`When using focus indicators, it's much easier to determine which form element is currently focused.`"
      />
    </div>
  </section>
</template>

<script type="text/babel">
export default {
  name: 'FocusRingsSection',
}
</script>
