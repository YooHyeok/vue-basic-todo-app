<script setup>
import { ref } from 'vue';
import  Child from '@/components/07-EmitsChild.vue'


const maerong = (msg) => {
  alert(msg)
}

</script>

<template>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/07-DefineEmits.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>DefineProps</h1>
  <Child @maerong="maerong" />
</template>

<style scoped>
</style>