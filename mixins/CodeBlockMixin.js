export default {
  mounted() {
    const codeBlocks = [...document.querySelectorAll('textarea.prism-editor__textarea')]

    if (codeBlocks.length) {
      codeBlocks.forEach((codeBlock) => {
        codeBlock.setAttribute('tabindex', -1)
      })
    }
  },
}
