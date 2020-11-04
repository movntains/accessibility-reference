<template>
  <section>
    <h2
      class="page-subheading"
      v-text="`Don't Remove Focus Rings`"
    />
    <p
      class="mb-4"
      v-text="`Focus rings act as the stand-in for a mouse pointer for keyboard-only users, so they should never be removed with CSS. Instead, they should be styled so that they match the site design.`"
    />
    <p v-text="`It's also possible to use JavaScript to hide focus rings when the user is using a mouse or trackpad, but display them when the user is using the keyboard.`" />
    <div class="my-8">
      <h3
        class="page-tertiary-heading"
        v-text="'Inaccessible: Form Elements Without Focus Rings'"
      />
      <div class="grid grid-cols-6 gap-2 items-center">
        <div class="col-span-6 sm:col-span-3">
          <div class="flex flex-col mb-4">
            <label
              for="username"
              class="font-medium"
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
              class="font-medium"
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
        class="mt-4"
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
              class="font-medium"
              v-text="'Username'"
            />
            <input
              id="username_accessible"
              type="text"
              class="form-input bg-white"
            >
          </div>
          <div class="flex flex-col">
            <label
              for="password_accessible"
              class="font-medium"
              v-text="'Password'"
            />
            <input
              id="password_accessible"
              type="password"
              class="form-input bg-white"
            >
          </div>
        </div>
      </div>
      <p
        class="mt-4"
        v-text="'With focus rings, the currently focused form element is much easier to distinguish.'"
      />
    </div>
  </section>
</template>

<script type="text/babel">
export default {
  name: 'FocusRingsSection',
}
</script>
