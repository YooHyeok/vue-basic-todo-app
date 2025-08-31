<template>
  <p>About View</p>
  <p>{{ $route }}</p>
  <button @click="$router.push('/hello')">hello 페이지로 이동</button>
</template>
<!-- 
[route] 내장객체
템플릿에서 접근: $route

[router] 내장객체
템플릿에서 접근: $router
 -->