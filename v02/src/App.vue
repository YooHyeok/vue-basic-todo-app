<script>
export default {
  // data: function() {
  data() {
    return {
      chennel: "유혁스쿨",
      subscribe: 2677
    }
  },
}
</script>
<!-- Text Interpolation(보간법) -->
<template>
  <h1>채널명 : {{ chennel /* Mustache 문법 */}}</h1>
  <h2>구독자수 : {{ subscribe }}</h2>
  <p>{{ `오늘의 행운 숫자 : ` + Math.ceil(Math.random() * 45) }}</p>
</template>

<style scoped>
</style>
