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
        class="my-4"
        v-text="'Forms Elements Without Focus Rings'"
      />
      <div class="flex flex-col sm:flex-row items-center">
        <div class="flex flex-col">
          <div class="flex flex-col mb-4">
            <label
              for="username"
              class="font-medium"
              v-text="'Username'"
            />
            <input
              id="username"
              type="text"
              class="p-2 rounded-sm bg-white focus:outline-none"
            >
          </div>
          <div class="flex flex-col">
            <label
              for="password"
              v-text="'Password'"
            />
            <input
              id="password"
              type="password"
              class="p-2 rounded-sm bg-white focus:outline-none"
            >
          </div>
        </div>
      </div>
      <p
        class="mt-4"
        v-text="`With focus rings, the only way to tell which of these form elements is currently focused is to look for the cursor.`"
      />
    </div>
    <div class="my-8">
      <h3
        class="my-4"
        v-text="'Forms Elements with Focus Rings'"
      />
      <div class="flex flex-col sm:flex-row items-center">
        <div class="flex flex-col">
          <div class="flex flex-col mb-4">
            <label
              for="username"
              class="font-medium"
              v-text="'Username'"
            />
            <input
              id="username"
              type="text"
              class="form-input bg-white"
            >
          </div>
          <div class="flex flex-col">
            <label
              for="password"
              v-text="'Password'"
            />
            <input
              id="password"
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
