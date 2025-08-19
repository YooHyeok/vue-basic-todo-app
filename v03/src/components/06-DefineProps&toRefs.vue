<script setup>
import { ref } from 'vue';
import  Child from '@/components/06-PropsChild.vue'

const post = ref({
  id: 1,
  title: '제목',
  mainCont: '본문'
})

const update = () => {
  post.value.title = '메롱';
  post.value.mainCont = '바보';
}

</script>

<template>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/06-DefineProps&toRefs.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>DefineProps</h1>
  <button @click="update">변경</button>
  <Child :title="post.title" :mainCont="post.mainCont" />
</template>

<style scoped>
</style>