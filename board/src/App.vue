<script setup>
import axios from 'axios'

const inputData = () => {
  axios.post('http://localhost:3000/member', {
      name: "유혁",
      email: "yh@gmail.com"
    })
}
</script>

<template>
  <button @click="inputData">데이터 입력</button>
</template>

<style scoped>
</style>
