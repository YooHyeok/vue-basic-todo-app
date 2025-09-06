<template>
  <p>Hello View</p>
  <p>{{ route }}</p>
  <button @click="router.push('about')">hello 페이지로 이동</button>
</template>
<!-- 
[route] 내장객체
스크립트에서 접근: useRoute

[router] 내장객체
스크립트에서 접근: useRouter
 -->
<script setup>
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onBeforeRouteLeave((to, from, next) => {
  console.log("[C]onBeforeRouteLeave - to: ", to)
  console.log("[C]onBeforeRouteLeave - from: ", from)
  if (to.fullPath !== '/about') next();
})
</script>