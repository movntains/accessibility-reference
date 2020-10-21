<template>
  <section>
    <h2 class="page-subheading">
      Give Icon Buttons an <code>aria-label</code> Attribute
    </h2>
    <p class="mb-4">
      Since a <code>&lt;button&gt;</code> element always attempts to compute its accessible name using its text content, buttons that don't have text content need an <code>aria-label</code> attribute. The value of this attribute will provide an accessible name to assistive technologies.
    </p>
    <p>
      Icon buttons are a perfect example of buttons than need to be given an <code>aria-label</code> attribute.
    </p>
    <div class="my-8">
      <h3 class="my-4">
        Button Without an <code>aria-label</code> Attribute
      </h3>
      <div class="flex flex-col sm:flex-row items-center">
        <button
          type="button"
          class="icon-button"
        >
          <SvgDownloadFile />
        </button>
        <code class="code-block">
          <span>&lt;button type="button"&gt;</span>
          <br>
          <span class="ml-3">&lt;svg /&gt;</span>
          <br>
          <span>&lt;/button&gt;</span>
        </code>
      </div>
      <p class="mt-4">
        The information a screen reader provides for this button will only consist of "button". Therefore, a screen reader user will have no idea what this button's purpose is, or what will happen if they click on it.
      </p>
    </div>
    <div>
      <h3 class="my-4">
        Button with an <code>aria-label</code> Attribute
      </h3>
      <div class="flex flex-col sm:flex-row items-center">
        <button
          type="button"
          aria-label="Download file"
          class="icon-button"
        >
          <SvgDownloadFile />
        </button>
        <code class="code-block">
          <span>&lt;button type="button" aria-label="Download file"&gt;</span>
          <br>
          <span class="ml-3">&lt;svg /&gt;</span>
          <br>
          <span>&lt;/button&gt;</span>
        </code>
      </div>
      <p class="mt-4">
        Since this button is given an <code>aria-label</code> attribute, it provides the accessible name of "Download file" to a screen reader. This lets a screen reader user know that clicking on this button will result in downloading a file.
      </p>
    </div>
  </section>
</template>

<script type="text/babel">
import SvgDownloadFile from '@/components/svg/SvgDownloadFile'

export default {
  name: 'IconButtonsSection',
  components: {
    SvgDownloadFile,
  },
}
</script>
