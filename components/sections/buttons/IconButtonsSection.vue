<template>
  <section class="mt-16">
    <h2
      class="page-subheading"
      v-text="'Give Icon Buttons an ARIA Label'"
    />
    <p class="my-6">
      Since a <code>&lt;button&gt;</code> element always attempts to compute its accessible name using its text content, buttons that don't have text content need an <code>aria-label</code> attribute. The value of this attribute will provide an accessible name to assistive technologies.
    </p>
    <p class="mb-6">
      Icon buttons are a perfect example of buttons than need to be given an <code>aria-label</code> attribute.
    </p>
    <div class="my-8">
      <h3
        class="page-tertiary-heading"
        v-text="'Inaccessible: Button Without an ARIA Label'"
      />
      <div class="grid grid-cols-6 gap-2 justify-items-center sm:justify-items-start items-center">
        <div class="col-span-6 sm:col-span-1 mb-4 sm:mb-0">
          <button
            type="button"
            class="icon-button"
          >
            <SvgDownloadFile />
          </button>
        </div>
        <AppCodeBlock
          :code="inaccessibleCode"
          class="col-span-6 sm:col-span-5"
        />
      </div>
      <p class="mt-4">
        The only thing that a screen reader will announce for this button will be the word "button". Therefore, a screen reader user will have no idea what this button's purpose is, or what will happen if they interact with it.
      </p>
    </div>
    <div class="my-8">
      <h3
        class="page-tertiary-heading"
        v-text="'Accessible: Button with an ARIA Label'"
      />
      <div class="grid grid-cols-6 gap-2 justify-items-center sm:justify-items-start items-center">
        <div class="col-span-6 sm:col-span-1 mb-4 sm:mb-0">
          <button
            type="button"
            aria-label="Download file"
            class="icon-button"
          >
            <SvgDownloadFile />
          </button>
        </div>
        <AppCodeBlock
          :code="accessibleCode"
          class="col-span-6 sm:col-span-5"
        />
      </div>
      <p class="my-4">
        Since this button is given an <code>aria-label</code> attribute, it provides the accessible name of "Download file" to a screen reader. This lets a screen reader user know that interacting with this button will result in downloading a file.
      </p>
      <p>
        <span
          class="font-semibold"
          v-text="'Note:'"
        />
        If this is a button that's going to be repeated (e.g., it'll be in every row of a table), then it's important to give the ARIA label a more specific name, such as <code>aria-label="Download file &lt;file_name&gt;"</code>, where <code>&lt;file_name&gt;</code> is the name of the file (which would most likely come from a prop).
      </p>
    </div>
  </section>
</template>

<script type="text/babel">
import AppCodeBlock from '@/components/global/AppCodeBlock'
import SvgDownloadFile from '@/components/svg/SvgDownloadFile'

export default {
  name: 'IconButtonsSection',
  components: {
    AppCodeBlock,
    SvgDownloadFile,
  },
  data() {
    return {
      inaccessibleCode: `<button type="button">\n\t<svg />\n</button>`,
      accessibleCode: `<button\n\ttype="button"\n\taria-label="Download file"\n>\n\t<svg />\n</button>`,
    }
  },
}
</script>
