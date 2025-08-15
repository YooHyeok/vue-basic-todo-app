<script>
export default {
  props: {
    todoList: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    todoUpdate(id) {
      this.$emit('todoUpdate', id)
    }
  }
}
</script>
<template>
  <ul id="todo-list">
      <li  
        v-for="todo in todoList" 
        :key="todo.id"
        :class="{completed: todo.completed}"
      >
        {{ todo.msg }}
        <button type="button" @click="todoUpdate(todo.id)">Delete</button>
      </li>
    </ul>
</template>