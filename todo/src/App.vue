<script >
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
export default {
  components: {
    TodoInput,
    TodoList,
  },
  data() {
    return {
      todoList: []
    }
  },
  methods: {
    todoInput(msg) {
      console.log("msg: ", msg)
    }
  }
}
</script>

<template>
  <div class="todo-container">
    <h1>TODO List</h1>
    <TodoInput @todo-input="todoInput"/>
    <TodoList/>
  </div>
</template>
