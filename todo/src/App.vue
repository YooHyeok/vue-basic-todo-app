<script >
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import { v4 as uuidv4 } from 'uuid'

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
      const item = {
        id: uuidv4(),
        msg: msg,
        complete: false,
      }
      console.log("item: ", item)
      this.todoList.push(item)
      console.log("todoList: ", JSON.stringify(this.todoList, null, 2))
    },
    todoUpdate(id) {
      this.todoList = this.todoList.map(v=> v.id === id ? {...v, completed: !v.completed } : v)
    }
  }
}
</script>

<template>
  <div class="todo-container">
    <h1>TODO List</h1>
    <TodoInput @todo-input="todoInput"/>
    <TodoList/>
    <TodoList :todoList @todo-update="todoUpdate"/>
  </div>
</template>
