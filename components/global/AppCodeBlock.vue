<template>
  <PrismEditor
    v-model="code"
    class="prism-block"
    :highlight="highlighter"
    readonly
    ignore-tab-key
  />
</template>

<script type="text/babel">
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  name: 'AppCodeBlock',
  components: {
    PrismEditor,
  },
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.markup)
    },
  },
}
</script>
