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
    <router-link to="/" active-class="on">Home</router-link> |
    <router-link to="/about" active-class="on">About</router-link> |
    <router-link to="/hello" active-class="on">Hello</router-link>
  </p>
</template>
<style scoped>
.on { /* router-link의 active-class에 속성에 정의한 클래스명 - 선택된 router-link에 해당 클래스명이 추가된다. */
  font-weight: bold;
  color: blue;
}
</style>