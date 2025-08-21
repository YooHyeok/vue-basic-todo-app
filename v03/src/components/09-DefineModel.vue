<script setup>
import { ref } from 'vue';
import  Child from '@/components/09-DmChild.vue'

const subject1 = ref('subject1')
const subject2 = ref('subject2')
const subject3 = ref('subject3')


</script>

<template>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/09-DefineModel.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>DefineModel</h1>
  <h3>subject1: {{ subject1 }}</h3>
  <h3>subject2: {{ subject2 }}</h3>
  <h3>subject3: {{ subject3 }}</h3>
  <Child 
    :subject1 
    :subject2 
    :subject3 
    @changeSubject1="(value) => subject1 = value" 
    @changeSubject2="(event) => subject2 = event.target.value" 
    v-model="subject3"
    v-model:keyModel="subject3"
    @update:subject3="(event) => subject3 = event.target.value"
  />
</template>

<style scoped>
</style>