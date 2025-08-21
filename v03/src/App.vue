<script setup>

import { ref } from 'vue';
import Counter from './components/00-Counter.vue'
import RefReactive from './components/01-RefReactive.vue'
import ClassBind from './components/02-ClassBind.vue'
import Computed from './components/03-Computed.vue'
import Watch from './components/04-Watch.vue'
import WatchEffect from './components/05-WatchEffect.vue'
import Props from './components/06-DefineProps&toRefs.vue'
import DefineEmits from './components/07-DefineEmits.vue'
import EventBind from './components/08-EventBind.vue'
import DefineModel from './components/09-DefineModel.vue'
import ProvideInject from './components/10-Provide&Inject.vue'

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
    <button @click="activeTab = 'DefineEmits'">DefineEmits 예제</button>
    <button @click="activeTab = 'EventBind'">EventBind 예제</button>
    <button @click="activeTab = 'DefineModel'">DefineModel 예제</button>
    <button @click="activeTab = 'ProvideInject'">Provide&Inject 예제</button>
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
  <DefineEmits v-if="activeTab == 'DefineEmits'" />
  <EventBind v-if="activeTab == 'EventBind'" />
  <DefineModel v-if="activeTab == 'DefineModel'" />
  <ProvideInject v-if="activeTab == 'ProvideInject'" />
  
</template>

<style scoped>
</style>
