<script setup>
import axios from 'axios'
import { ref } from 'vue'

const table = ref(null)
const isInputMode = ref(false)
const name = ref('')
const email = ref('')

/* ===================== propmise then catch ===================== */
const inputData = () => {
  inputDataAxios()
  .then(res => {
    console.debug("전송완료\n응답상세내용: ", res)
    console.table(res)
    getData();
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
    getDataAsync(res);
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
  let param = {
    name: name.value,
    email: email.value
  }
  if (param.name === name.value && param.email === email.value) {
    name.value = '';
    email.value = '';
    isInputMode.value = false;
  }
  return await axios.post('http://localhost:3000/member', param)
}

const getDataSuccessCallback = (res) => {
  console.log("res: ", res)
  const members = res.data
 let htmlContent = `
    <table class="table ms-3">
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
  <div class="container">
    <button @click="isInputMode = true" class="btn btn-primary ms-3">데이터 입력</button>
    <button @click="getDataAsync" class="btn btn-success ms-3">데이터 가져오기</button>
    <div v-show="isInputMode">
      <form autocomplete="off">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" v-model="name">
        <label class="form-label">Email</label>
        <input type="text" class="form-control" v-model="email">
        <button type="button" class="btn btn-success" @click="inputDataAsync">입력 확인</button>
        <button type="button" class="btn btn-secondary" @click="isInputMode = false">취소</button>
      </form>
    </div>
    <div ref="table"></div>
  </div>
</template>

<style scoped>
div {
  margin-top: 10px
}
</style>
