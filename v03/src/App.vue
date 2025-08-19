<script setup>

import { ref } from 'vue';
import Counter from './components/00-Counter.vue'
import RefReactive from './components/01-RefReactive.vue'
import ClassBind from './components/02-ClassBind.vue'
import Computed from './components/03-Computed.vue'
import Watch from './components/04-Watch.vue'
import WatchEffect from './components/05-WatchEffect.vue'
import Props from './components/06-DefineProps&toRefs.vue'

const activeTab = ref('Counter')

</script>
<template>
  <!-- 헤더 탭 -->
  <div>
    <button @click="activeTab = 'Counter'">Counter 예제</button>
    <button @click="activeTab = 'RefReactive'">RefReactive 예제</button>
    <button @click="activeTab = 'ClassBind'">ClassBind 예제</button>
    <button @click="activeTab = 'Computed'">Computed 예제</button>
    <button @click="activeTab = 'Watch'">Watch 예제</button>
    <button @click="activeTab = 'WatchEffect'">WatchEffect 예제</button>
    <button @click="activeTab = 'Props'">DefineProps&toRefs 예제</button>
  </div>

  <!-- 구분선 -->
  <hr>
  <Counter v-if="activeTab == 'Counter'" />
  <RefReactive v-if="activeTab == 'RefReactive'" />
  <ClassBind v-if="activeTab == 'ClassBind'" />
  <Computed v-if="activeTab == 'Computed'" />
  <Watch v-if="activeTab == 'Watch'" />
  <WatchEffect v-if="activeTab == 'WatchEffect'" />
  <Props v-if="activeTab == 'Props'" />
  
</template>

<style scoped>
</style>
