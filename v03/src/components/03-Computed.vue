<script setup>

import { ref, computed } from 'vue';

const cnt = ref(10)

const counter = () => {
  cnt.value ++;
}

const oddEven = computed(() => cnt.value % 2 ? '홀수' : '짝수') 


</script>

<template>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/03-Computed.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <p>cnt : {{ cnt }}</p>
  <p>oddEven : {{ oddEven }}</p>
  <button @click="counter">클릭</button>
</template>
