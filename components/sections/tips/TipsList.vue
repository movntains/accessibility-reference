<template>
  <dl>
    <TipsListItem
      v-for="(tip, index) in tips"
      :key="`tip-${index}`"
      :tip="tip"
    />
  </dl>
</template>

<script type="text/babel">
import TipsListItem from '@/components/sections/tips/TipsListItem'

export default {
  name: 'TipsList',
  components: {
    TipsListItem,
  },
  data() {
    return {
      tips: [
        {
          heading: 'Give icon buttons an ARIA label.',
          description: `A <code>&lt;button&gt;</code> element <strong>always</strong> attempts to compute its accessible name using its text content. Icon buttons typically don't have text content, so they need to be given an <code>aria-label</code> attribute in order to have an accessible name.`,
        },
        {
          heading: 'Give every form element an associated label.',
          description: `A form label serves two important purposes: (1) It can be a click target for the form element, and (2) its text is the accessible name of the form element (when the element is focused, a screen reader announces the label text). The label should always be present in the HTML, even if it's hidden from view with CSS (e.g., with Tailwind's <code>sr-only</code> class).`,
        },
        {
          heading: `Don't remove focus indicators.`,
          description: `The focus indicator identifies the currently focused element on the page, and it's extremely important for keyboard-only users because it acts as a stand-in for their mouse pointer. Instead of removing it, style it with the <code>:focus</code> CSS pseudo-class.`,
        },
        {
          heading: `Don't use CSS to reorder HTML elements.`,
          description: `A page's tab order will match the order in which elements appear in the HTML, so using CSS (e.g., Flexbox) to reorder elements on the page can result in an illogical tab order. This results in a bad user experience for a keyboard-only user. If content has to be rearranged, change the order of the elements in the HTML, <strong>not</strong> with CSS.`,
        },
        {
          heading: `Don't rely on color alone to convey information.`,
          description: `Users with color perception deficiencies can have difficulty differentiating between certain colors, and a screen reader doesn't perceive color at all. So, information that's conveyed by color alone will <strong>not</strong> be conveyed well or even at all.`,
        },
        {
          heading: 'Use an empty <code>alt</code> attribute for decorative images.',
          description: `A decorative image is one that doesn't add any information to the page's content. For example, the image may provide information that's already provided by adjacent text, or it may just be used to make the page look better from a visual perspective. Such images should have an empty <code>alt</code> attribute (<code>alt=""</code>) so that they can be ignored by assistive technologies. It's important to note that the <code>alt</code> attribute <strong>cannot</strong> be left out entirely. When it isn't provided, some screen readers will announce the file name instead of the image.`,
        },
        {
          heading: `Don't skip heading levels.`,
          description: `Screen readers have commands that enable quickly jumping between headings, and a survey found that screen reader users will typically navigate an unfamiliar page by exploring the headings, so headings should be used to create a structural outline of the page. Skipping heading levels in order to use the browser's default heading styles so as to closely match a design breaks the outline model that screen reader users utilize. Instead, use headings in their proper order and style them with CSS.`,
        },
        {
          heading: 'Place meaningful text inside of links.',
          description: `Links get their accessible name from their text content, so the text placed inside of them must be chosen carefully. Using meaningful text, rather than filler words like "click here" or "read more", will be especially helpful to screen reader users because some screen readers offer shortcuts that will list all of the links on a page.`,
        },
        {
          heading: 'Use relative units for text size.',
          description: `If a user with a vision deficiency updates text size preferences in the browser, it's essential that the text on the page updates accordingly. If text is sized in <code>px</code>, the page copy will not update when the user updates their browser's text size preferences. To prevent this issue, use <code>em</code> or <code>rem</code> for text size instead of <code>px</code>.`,
        },
        {
          heading: 'Allow users to zoom.',
          description: 'Users with vision deficiencies may also zoom in so as to more easily read the page content. The <code>viewport</code> meta tag, which is placed in the <code>&lt;head&gt;</code> of an HTML file, should be configured such that zooming is permitted. Setting <code>maximum-scale=1</code> and/or <code>user-scalable=no</code> will prevent zooming, so both settings should be avoided.',
        },
      ],
    }
  },
}
</script>
