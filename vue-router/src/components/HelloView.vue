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
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
</script>