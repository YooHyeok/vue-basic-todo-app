<template>
  <p>Header</p>
  <p>
    <!-- window의 location을 통한 페이지 전환: 로딩 발생 -->
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <a href="/hello">Hello</a>
  </p>
  <p>
    <!-- vue-router를 통한 페이지 전환: router-view 영역에 컴포넌트만 동적으로 교체 -->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/hello">Hello</router-link>
  </p>
</template>