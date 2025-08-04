<script>
export default {
  // data: function() {
  data() {
    return {
      count: 0
    }
  },
}
</script>
<template>
  <!-- v-on: 엘리먼트에 발생한 이벤트를 캐치해준다.  -->
  <div>
    <hr/>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/04-EventBind.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>
    <p>count: {{ count }}</p>
    <button v-on:click="count++">증가(클릭)</button>
    <!-- @이벤트명 : v-on:이벤트명 의 축약형 -->
    <button @click="count--">감소(클릭)</button>
    <button @mouseover="count=0">0으로 초기화(오버)</button>
  </div>

</template>

<style scoped>
</style>
