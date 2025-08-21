<script setup>
import { ref, provide } from 'vue';
import Child from '@/components/10-ProvideInjectChild.vue'

const count = ref(0)
const increment = () => count.value ++;
provide('count', count)
provide('increment', increment)

</script>

<template>
  <div>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/10-ProvideInject.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>

    <h1>Provide&Inject</h1>
    <button @click="increment">Counting</button>
    {{ count }}
    <Child/>
  </div>
</template>

<style scoped>
div {
  border: 3px solid black;
  padding: 20px;
}
</style>