<script>
export default {
  // data: function() {
  data() {
    return {
      chennel: "유혁스쿨",
      subscribe: 2677,
      y: `<b style="color:red;">너무졸려요</b>`,
      bool: false,
    }
  },
}
</script>
<template>
  <div>
     <!-- Text Interpolation(보간법): {{ 상태변수 등 값 }} 형태로 사용 - Mustache문법 이라고도 불린다 -->
    <h2>Text Interpolation(보간법)</h2>
    <h5>채널명 : {{ chennel }}</h5>
    <h5>구독자수 : {{ subscribe }}</h5>
    <p>{{ `오늘의 행운 숫자 : ` + Math.ceil(Math.random() * 45) }}</p>
    <hr/>

    <!-- v-text: 보간법과 비슷한 문법으로 텍스트노드 역할을 한다 - 태그 사이에 직접 데이터를 넣을 수 없음 -->
    <h2>v-text</h2>
    <h5 v-text="chennel"></h5>
    <h5 v-text="subscribe"></h5>
    <h5 v-text="bool ? 'true' : 'false'"></h5>
    <hr/>

    <!-- v-html: html 태그를 표현 - 순수 js의 innerHtml과 같음 -->
    <h2>v-html</h2>
    <h5>{{ y }}</h5>
    <h5 v-text="y"></h5>
    <h5 v-html="y"></h5>
    <hr/>

    <!-- v-pre: DOM 컴파일 제외 - 중괄호를 포함한 보간법 문법을 텍스트노드로 출력 -->
    <h2>v-pre</h2>
    <h5 v-pre>{{ channel }}</h5>
    <hr/>
  </div>
</template>

<style scoped>
</style>
