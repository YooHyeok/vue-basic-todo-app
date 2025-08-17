<script setup>
import { ref } from 'vue';
import Counter from './components/00-Counter.vue'
const activeTab = ref('Counter')
</script>
<template>
  <!-- 헤더 탭 -->
  <div>
    <button @click="activeTab = 'Counter'">Counter 예제</button>
  </div>

  <!-- 구분선 -->
  <hr>
  <Counter v-if="activeTab == 'Counter'" />
  
</template>

<style scoped>
</style>
