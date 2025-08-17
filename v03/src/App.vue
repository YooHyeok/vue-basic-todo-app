<script setup>

import { ref } from 'vue';
import Counter from './components/00-Counter.vue'
import RefReactive from './components/01-RefReactive.vue'
import ClassBind from './components/02-ClassBind.vue'

const activeTab = ref('Counter')

</script>
<template>
  <!-- 헤더 탭 -->
  <div>
    <button @click="activeTab = 'Counter'">Counter 예제</button>
    <button @click="activeTab = 'RefReactive'">RefReactive 예제</button>
    <button @click="activeTab = 'ClassBind'">ClassBind 예제</button>
  </div>

  <!-- 구분선 -->
  <hr>
  <Counter v-if="activeTab == 'Counter'" />
  <RefReactive v-if="activeTab == 'RefReactive'" />
  <ClassBind v-if="activeTab == 'ClassBind'" />
  
</template>

<style scoped>
</style>
