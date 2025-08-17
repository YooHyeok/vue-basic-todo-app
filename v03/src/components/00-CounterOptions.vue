<script>
export default {
  data() {
    return {
      cnt: 0
    }
  },
  methods: {
    counter() {
      this.cnt++;
    }
  },
  computed: {
    oddEven() {
      return this.cnt % 2 ? '홀수' : '짝수'
    }
  }
}
</script>

<template>
  <p> {{ cnt }} </p>
  <p>홀짝 판별: {{ oddEven }}</p>
  <button @click="counter">클릭</button>
</template>
