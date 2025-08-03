<script>
export default {
  // data: function() {
  data() {
    return {
      bool: false,
      score: null,
    }
  },
}
</script>
<template>
  <div>
    <hr/>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/02-ConditRender.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>
    <input type="text" placeholder="평점을 입력하세요" v-model="score">
    <button v-on:click="score=null || ''">초기화</button>
    <h1>v-if 디렉티브</h1>
     <!-- v-if / v-else-if / v-else : 순수 if는 단독사용 가능 / else가 포함되었다면 if가 선행되어야 함 -->
     <h2 v-if="score == null || score == ''">평점 : 평점을 입력하세요</h2>
    <h2 v-else-if="score >= 90">평점 : A</h2>
    <h2 v-else-if="score >= 80">평점 : B</h2>
    <h2 v-else-if="score >= 70">평점 : C</h2>
    <h2 v-else-if="score <= 60">평점 : D</h2>
    <h3>점수 표</h3>
    <h5>A: 90이상(v-if)</h5>
    <h5>B: 80이상(v-else-if)</h5>
    <h5>C: 70이상(v-else-if)</h5>
    <h5>D: 60이상(v-else)</h5>
    <hr/>
    <!-- v-show: v-if~else-if~else와는 다르게 display:none style이 적용 - 스타일로 처리되므로 조건 변경 빈도가 잦을때 사용하는것이 합리적 -->
    <h1>v-show 디렉티브</h1>
    <h2 v-show="!bool">이 영역은 v-show에서 처리하고 있습니다.</h2>
  </div>
</template>

<style scoped>
</style>
