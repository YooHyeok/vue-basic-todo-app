<script >
</script>

<template>
  <div class="todo-container">
    <h1>TODO List</h1>
    <form id="todo-form">
      <input type="text" id="todo-input" placeholder="Enter a new task" />
      <button type="button">Add</button>
    </form>
    <ul id="todo-list">
      <li>
        Sample Task 1
        <button type="button">Delete</button>
      </li>
      <li class="completed">
        Sample Task 2
        <button type="button">Delete</button>
      </li>
      <li>
        Sample Task 3
        <button type="button">Delete</button>
      </li>
    </ul>
  </div>
</template>
