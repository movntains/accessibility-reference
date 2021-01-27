<template>
  <div class="p-4 bg-gray-100 shadow-inner rounded-sm">
    <div class="mb-6">
      <button
        type="button"
        class="text-sm underline focus:outline-none focus:shadow-outline"
        @click="showKeyboardInstructions = !showKeyboardInstructions"
        @keydown.enter.prevent="showKeyboardInstructions = !showKeyboardInstructions"
        v-text="keyboardInstructionsButtonText"
      />
      <p
        v-if="showKeyboardInstructions"
        class="text-sm leading-normal"
        v-text="'Select a todo item, press the spacebar to grab it. Press the up and down arrows to change position, then the spacebar to drop.'"
      />
    </div>
    <div
      id="reorder_instructions"
      class="sr-only"
      v-text="'Select a todo item, then press the spacebar to reorder.'"
    />
    <div
      aria-live="assertive"
      class="sr-only"
      v-text="assistiveText"
    />
    <Draggable
      v-model="todos"
      :animation="100"
      tag="ol"
      role="listbox"
    >
      <TodoListItem
        v-for="(todo, index) in todos"
        :key="todo.id"
        :index="index"
        :todo-item="todo"
        @itemGrabbed="handleItemGrabbed($event)"
        @itemDropped="handleItemDropped($event)"
        @moveItem="moveItem($event)"
      />
    </Draggable>
  </div>
</template>

<script type="text/babel">
import TodoListItem from '@/components/sections/drag-drop/TodoListItem'

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  data() {
    return {
      assistiveText: '',
      showKeyboardInstructions: false,
      todos: [
        { id: 1, text: 'Buy milk' },
        { id: 2, text: 'Do the laundry' },
        { id: 3, text: 'Finish a book' },
        { id: 4, text: 'Pay the bills' },
        { id: 5, text: 'Wash the dishes' },
      ],
    }
  },
  computed: {
    keyboardInstructionsButtonText() {
      return this.showKeyboardInstructions ? 'Hide Keyboard Instructions' : 'Show Keyboard Instructions'
    },
  },
  methods: {
    cloneDeep(object) {
      return JSON.parse(JSON.stringify(object))
    },
    getItemPosition(index) {
      return `${index + 1} of ${this.todos.length}`
    },
    handleItemGrabbed({ todoItem, index }) {
      this.assistiveText = `${todoItem.text}, grabbed. Current position in list: ${this.getItemPosition(index)}. Press up and down arrows to change position, spacebar to drop.`
    },
    handleItemDropped(todoItem) {
      const index = this.todos.findIndex(todoToFind => todoToFind.id === todoItem.id)

      this.assistiveText = `${todoItem.text}, dropped. Final position in list: ${this.getItemPosition(index)}`
    },
    moveItem({ dragIndex, hoverIndex }) {
      if (hoverIndex < 0 || hoverIndex >= this.todos.length) {
        return
      }

      const todosCopy = this.cloneDeep(this.todos)
      const draggedItem = todosCopy[dragIndex]

      todosCopy.splice(dragIndex, 1)
      todosCopy.splice(hoverIndex, 0, draggedItem)

      this.todos = todosCopy

      this.assistiveText = `${draggedItem.text}. New position in list: ${this.getItemPosition(hoverIndex)}`

      this.$nextTick(() => {
        const items = [...document.getElementsByClassName('todo-list__item')]

        items[hoverIndex].focus()
      })
    },
  },
}
</script>
