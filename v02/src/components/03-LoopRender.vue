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
