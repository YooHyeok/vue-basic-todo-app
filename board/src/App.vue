<script setup>
import axios from 'axios'

const inputData = () => {
  axios.post('http://localhost:3000/member', {
      name: "유혁",
      email: "yh@gmail.com"
    }).then(res => {
      console.debug("전송완료\n응답상세내용: ", res)
      console.table(res)
    }).catch(err => {
      console.error("서버에 이상이 있습니다\n오류상세내용: ", err)
    })
    console.log("비동기적 호출")
}
</script>

<template>
  <button @click="inputData">데이터 입력</button>
</template>

<style scoped>
</style>
