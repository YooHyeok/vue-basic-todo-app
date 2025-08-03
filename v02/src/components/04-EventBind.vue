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
    <p>count: {{ count }}</p>
    <button v-on:click="count++">증가(클릭)</button>
    <button v-on:click="count--">감소(클릭)</button>
    <button v-on:mouseover="count=0">0으로 초기화(오버)</button>
  </div>

</template>

<style scoped>
</style>
