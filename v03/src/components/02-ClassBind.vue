<script setup>
import { ref, reactive } from 'vue';
const titleClass = ref('')
function good() {
  titleClass.value = 'title'
}
</script>

<template>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/02-ClassBind.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1 :class="titleClass">가능한 빨간색이</h1>
  <button @click="good">클릭</button>
</template>


<style scoped>
.title {
  color: red;
}
</style>