<script setup>
import { ref } from 'vue';
import Counter from './components/00-Counter.vue'
import RefReactive from './components/01-RefReactive.vue'
const activeTab = ref('Counter')
</script>
<template>
  <!-- 헤더 탭 -->
  <div>
    <button @click="activeTab = 'Counter'">Counter 예제</button>
    <button @click="activeTab = 'RefReactive'">RefReactive 예제</button>
  </div>

  <!-- 구분선 -->
  <hr>
  <Counter v-if="activeTab == 'Counter'" />
  <RefReactive v-if="activeTab == 'RefReactive'" />
  
</template>

<style scoped>
</style>
