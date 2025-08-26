<script setup>
import axios from 'axios'
import { ref } from 'vue'

const table = ref(null)
const isInputMode = ref(false)
const name = ref('')
const email = ref('')
const members = ref([])

/* ===================== propmise async await ===================== */
const inputData = async () => {
  try {
    let param = {
      name: name.value,
      email: email.value
    }
    const res = await axios.post('http://localhost:3000/member', param);
    console.debug("전송완료\n응답상세내용: ", res)
    name.value = '';
    email.value = '';
    isInputMode.value = false;
    getData();
  } catch(err) {
    console.error("서버에 이상이 있습니다\n오류상세내용: ", err)
  }
  console.log("비동기적 호출")
}

const getData = async () => {
  try {
    const res = await axios.get('http://localhost:3000/member')
    members.value = res.data
  } catch(err) {
    console.error(err)
  }
}

</script>

<template>
  <div class="container">
    <button @click="isInputMode = true" class="btn btn-primary ms-3">데이터 입력</button>
    <button @click="getData" class="btn btn-success ms-3">데이터 가져오기</button>
    <div v-show="isInputMode">
      <form autocomplete="off">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" v-model="name">
        <label class="form-label">Email</label>
        <input type="text" class="form-control" v-model="email">
        <button type="button" class="btn btn-success" @click="inputData">입력 확인</button>
        <button type="button" class="btn btn-secondary" @click="isInputMode = false">취소</button>
      </form>
    </div>
    <div ref="table">
      <table class="table ms-3" v-show="members.length > 0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>테이블 종류: template v-for </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members">
            <td>{{ member.id }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.email }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
div {
  margin-top: 10px
}
</style>
