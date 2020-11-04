<template>
  <ul class="list-disc ml-4">
    <li
      v-for="(post, index) in posts"
      :key="`post-${index}`"
    >
      <a
        :href="post.link"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-brand-blue hover:underline"
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
      ],
    }
  },
}
</script>
