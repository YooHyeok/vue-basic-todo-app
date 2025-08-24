<script setup>
import axios from 'axios'
import { ref } from 'vue'

const table = ref(null)

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

const getData = () => {
  axios.get('http://localhost:3000/member')
  .then(res => {
    const members = res.data
    let htmlContent = `
    <table border="1">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
      </tr>`
    members.forEach(member => {
      htmlContent += `
      <tr>
        <td>${member.id}</td>
        <td>${member.name}</td>
        <td>${member.email}</td>
      </tr>`
    })
    htmlContent += `</table>`
    table.value.innerHTML = htmlContent;
  })
}

</script>

<template>
  <button @click="inputData">데이터 입력</button>
  <button @click="getData">데이터 가져오기</button>
  <div ref="table">

  </div>
</template>

<style scoped>
div {
  margin-top: 10px
}
</style>
