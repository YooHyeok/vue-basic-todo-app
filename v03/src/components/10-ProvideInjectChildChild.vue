<script setup>
import { inject } from 'vue';

const count = inject('count')
const increment = inject('increment')


</script>

<template>
  <div>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/10-ProvideInject.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>

    <h1>GrandSon</h1>
    <p>count: {{ count }}</p>
    <button @click="increment">Counting</button>
  </div>
</template>
<style scoped>
div {
  border: 3px solid green;
  padding: 20px;
}
</style>