<template>
  <div class="container mb-10 text-gray-600">
    <h1
      class="page-heading"
      v-text="'Accessibility Blog Posts'"
    />
    <p
      class="mb-8"
      v-text="`We're passionate about accessibility, and we like to write blog posts about it. These posts can include anything from what accessibility is and why it's important to how to make an accessible drag-and-drop component in Vue. Check out the list of posts below if you're interested in reading more.`"
    />
    <BlogPostList />
  </div>
</template>

<script type="text/babel">
import BlogPostList from '@/components/sections/blogs/BlogPostList'

export default {
  name: 'BlogListPage',
  components: {
    BlogPostList,
  },
}
</script>
