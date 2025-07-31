<script>
export default {
  // data: function() {
  data() {
    return {
      chennel: "유혁스쿨",
      subscribe: 2677,
      y: `<b style="color:red;">너무졸려요</b>`,
      bool: false,
  },
}
</script>
<template>

  <!-- Text Interpolation(보간법): {{ 상태변수 등 값 }} 형태로 사용 - Mustache문법 이라고도 불린다 -->
  <h1>채널명 : {{ chennel }}</h1>
  <h2>구독자수 : {{ subscribe }}</h2>
  <p>{{ `오늘의 행운 숫자 : ` + Math.ceil(Math.random() * 45) }}</p>

  <!-- v-text: 보간법과 비슷한 문법으로 텍스트노드 역할을 한다 - 태그 사이에 직접 데이터를 넣을 수 없음 -->
  <h1 v-text="chennel"></h1>
  <h1 v-text="subscribe"></h1>
  <h1 v-text="bool ? 'true' : 'false'"></h1>

  <!-- v-html: html 태그를 표현 - 순수 js의 innerHtml과 같음 -->
  <h1>{{ y }}</h1>
  <h1 v-text="y"></h1>
  <h1 v-html="y"></h1>

</template>

<style scoped>
</style>
