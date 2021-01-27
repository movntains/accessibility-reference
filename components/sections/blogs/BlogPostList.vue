<template>
  <ul class="list-disc ml-4">
    <li
      v-for="(post, index) in posts"
      :key="`post-${index}`"
      class="mb-6"
    >
      <a
        :href="post.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-black hover:text-brand-blue hover:underline"
        v-text="post.title"
      />
    </li>
  </ul>
</template>

<script type="text/babel">
export default {
  name: 'BlogPostList',
  data() {
    return {
      posts: [
        {
          title: 'How Semantic HTML Improves the Accessibility of a Website',
          link: 'https://zaengle.com/blog/how-semantic-html-will-improve-the-accessibility-of-a-website',
        },
        {
          title: '10 Foolproof Tips for Maximizing Website Accessibility',
          link: 'https://zaengle.com/blog/10-foolproof-tips-for-maximizing-website-accessibility',
        },
      ],
    }
  },
}
</script>
