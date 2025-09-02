<template>
  <h1>Company</h1>
  <p>회사 소개 | 오시는 길 | 회사 연혁</p>
  <p>
    <strong>path: </strong>
    <router-link to="/company/intro" active-class="on">회사 소개</router-link> |
    <router-link to="/company/map" active-class="on">오시는 길</router-link> |
    <router-link to="/company/history" active-class="on">회사 연혁</router-link>
  </p>
  
  <router-view></router-view>
</template>