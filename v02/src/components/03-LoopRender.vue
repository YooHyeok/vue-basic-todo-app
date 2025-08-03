<script>
export default {
  // data: function() {
  data() {
    return {
      sports: [
        'Baseball',
        'Football',
        'Volleyball',
        'Swimming',
      ],
    }
  },
}
</script>
<template>
  <div>
    <hr/>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/03-LoopRender.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>
     <!-- v-for: 요소 순회 -->
    <span>순수 출력</span>
    <ul>
      <li>{{ sports[0] }}</li>
      <li>{{ sports[1] }}</li>
      <li>{{ sports[2] }}</li>
      <li>{{ sports[3] }}</li>
    </ul>
    <span>v-for 적용</span>
    <ul>
      <li v-for="(sport, index) in sports" :key="index">{{ index + 1 }} {{ sport }}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>
