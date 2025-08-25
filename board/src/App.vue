<script setup>
import axios from 'axios'
import { ref } from 'vue'

const table = ref(null)

/* ===================== propmise then catch ===================== */
const inputData = () => {
  inputDataAxios()
  .then(res => {
    console.debug("전송완료\n응답상세내용: ", res)
    console.table(res)
  })
  .catch(err => console.error("서버에 이상이 있습니다\n오류상세내용: ", err))
  console.log("비동기적 호출")
}

const getData = () => {
  axios.get('http://localhost:3000/member')
  .then(getDataSuccessCallback)
  .error(err => console.error(err))
}
/* ===================== propmise async await ===================== */
const inputDataAsync = async () => {
  try {
    const res = await inputDataAxios();
    console.debug("전송완료\n응답상세내용: ", res)
    console.table(res)
  } catch(err) {
    console.error("서버에 이상이 있습니다\n오류상세내용: ", err)
  }
  console.log("비동기적 호출")
}

const getDataAsync = async () => {
  try {
    const res = await axios.get('http://localhost:3000/member')
    getDataSuccessCallback(res);
  } catch(err) {
    console.error(err)
  }
}

const inputDataAxios = async () => {
  return await axios.post('http://localhost:3000/member', {
    name: "유혁",
    email: "yh@gmail.com"
  })
}

const getDataSuccessCallback = (res) => {
  const members = res.data
 let htmlContent = `
    <table class="table ms-3 me-3">
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
}

</script>

<template>
  <button @click="inputDataAsync" class="btn btn-primary ms-3">데이터 입력</button>
  <button @click="getDataAsync" class="btn btn-success ms-3">데이터 가져오기</button>
  <div ref="table">

  </div>
</template>

<style scoped>
div {
  margin-top: 10px
}
</style>
