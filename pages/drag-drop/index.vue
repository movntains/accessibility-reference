<template>
  <AppSectionWrapper class="text-gray-600">
    <h1
      class="page-heading"
      v-text="'Accessible Drag-and-Drop'"
    />
    <p
      class="mb-10"
      v-text="'This example is written in Vue, but the principles can be applied to any framework.'"
    />
    <div>
      <h2
        class="page-subheading"
        v-text="'Todo List'"
      />
      <p
        class="mb-4"
        v-text="'These are some items in a todo list. You can drag and drop to reorder them to reflect what you want to complete first.'"
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
import CodeBlockMixin from '@/mixins/CodeBlockMixin'
import TodoList from '@/components/sections/drag-drop/TodoList'
import AppSectionWrapper from '@/components/global/AppSectionWrapper'

export default {
  name: 'DragAndDropExamplePage',
  components: {
    TodoList,
    AppSectionWrapper,
  },
  mixins: [CodeBlockMixin],
}
</script>
