<script>
export default {
  // data: function() {
  data() {
    return {
      chennel: "유혁스쿨",
      subscribe: 2677,
      y: `<b style="color:red;">너무졸려요</b>`,
      bool: false,
      score: 69,
      sports: [
        'Baseball',
        'Football',
        'Volleyball',
        'Swimming',
      ]
    }
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

  <!-- v-pre: DOM 컴파일 제외 - 중괄호를 포함한 보간법 문법을 텍스트노드로 출력 -->
  <h1 v-pre>{{ channel }}</h1>

  <!-- v-if / v-else-if / v-else : 순수 if는 단독사용 가능 / else가 포함되었다면 if가 선행되어야 함 -->
  <h1 v-if="score >= 90">평점 : A</h1>
  <h1 v-else-if="score >= 80">평점 : B</h1>
  <h1 v-else-if="score >= 70">평점 : C</h1>
  <h1 v-else>평점 : D</h1>
  <!-- v-show: v-if~else-if~else와는 다르게 display:none style이 적용 - 스타일로 처리되므로 조건 변경 빈도가 잦을때 사용하는것이 합리적 -->
  <h1 v-show="!bool >= 100">이 영역은 v-show에서 처리하고 있습니다.</h1>

  <!-- v-for: 요소 순회 -->
  <ul>
    <li>{{ sports[0] }}</li>
    <li>{{ sports[1] }}</li>
    <li>{{ sports[2] }}</li>
    <li>{{ sports[3] }}</li>
  </ul>
  <ul>
    <li v-for="(sport, index) in sports" :key="index">{{ index + 1 }} {{ sport }}</li>
  </ul>
</template>

<style scoped>
</style>
