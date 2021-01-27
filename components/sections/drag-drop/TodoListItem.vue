<template>
  <li
    role="option"
    draggable="true"
    aria-describedby="reorder_instructions"
    tabindex="0"
    class="todo-list__item"
    @keydown.space.prevent="toggleGrabbed"
    @keydown.down.prevent="moveItem(true)"
    @keydown.up.prevent="moveItem(false)"
  >
    <p v-text="todoItem.text" />
  </li>
</template>

<script type="text/babel">
export default {
  name: 'TodoListItem',
  props: {
    index: {
      type: Number,
      required: true,
    },
    todoItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isGrabbed: false,
    }
  },
  methods: {
    toggleGrabbed() {
      if (this.isGrabbed) {
        this.isGrabbed = false

        this.$emit('itemDropped', this.todoItem)
      } else {
        this.isGrabbed = true

        this.$emit('itemGrabbed', {
          todoItem: this.todoItem,
          index: this.index,
        })
      }
    },
    moveItem(moveDown) {
      if (!this.isGrabbed) {
        return
      }

      const hoverIndex = moveDown ? this.index + 1 : this.index - 1

      this.$emit('moveItem', {
        dragIndex: this.index,
        hoverIndex,
      })
    },
  },
}
</script>
