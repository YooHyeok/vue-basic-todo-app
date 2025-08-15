<script >
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
export default {
  components: {
    TodoInput,
    TodoList,
  }
}
</script>

<template>
  <div class="todo-container">
    <h1>TODO List</h1>
    <TodoInput/>
    <TodoList/>
  </div>
</template>
