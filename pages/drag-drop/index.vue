<template>
  <AppSectionWrapper class="text-gray-600">
    <template #sidebar>
      <AppSidebarNavigation :links="links" />
    </template>
    <h1
      class="page-heading"
      v-text="'Accessible Drag-and-Drop'"
    />
    <p
      class="my-6"
      v-text="'This example is written in Vue, but the principles can be applied to any framework.'"
    />
    <p
      id="drag-drop-code"
      class="mb-6"
    >
      <a
        href="https://github.com/movntains/a11y-demo/tree/develop/components/sections/drag-drop"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan-700 hover:text-cyan-900 underline focus:outline-none focus:shadow-outline-teal"
        v-text="'View the code for this example.'"
      />
    </p>
    <p id="drag-drop-post">
      <a
        href="https://zaengle.com/blog/accessible-drag-and-drop-in-vue"
        target="_blank"
        rel="noopener noreferrer"
        class="text-cyan-700 hover:text-cyan-900 underline focus:outline-none focus:shadow-outline-teal"
        v-text="'View a blog post walk-through for this example.'"
      />
    </p>
    <div class="mt-10">
      <h2
        id="drag-drop-example"
        class="page-subheading"
        v-text="'To-do List'"
      />
      <p
        class="mb-4"
        v-text="'These are some items in a to-do list. You can drag and drop to reorder them to reflect what you want to complete first.'"
      />
      <p
        class="mb-10 font-medium"
        v-text="`(The explanation above is important. It lets a screen reader user know what's in the list and that items can be reordered.)`"
      />
      <TodoList />
    </div>
  </AppSectionWrapper>
</template>

<script type="text/babel">
import TodoList from '@/components/sections/drag-drop/TodoList'
import AppSectionWrapper from '@/components/global/AppSectionWrapper'
import AppSidebarNavigation from '@/components/navigation/AppSidebarNavigation'

export default {
  name: 'DragAndDropExamplePage',
  components: {
    TodoList,
    AppSectionWrapper,
    AppSidebarNavigation,
  },
  data() {
    return {
      links: [
        {
          to: 'drag-drop-code',
          text: 'Link to the Code',
        },
        {
          to: 'drag-drop-post',
          text: 'Blog Post Walk-through',
        },
        {
          to: 'drag-drop-example',
          text: 'Interactive Example',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Drag-and-Drop | Accessibility Reference',
    }
  },
}
</script>
