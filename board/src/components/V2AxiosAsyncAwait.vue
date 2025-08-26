<script setup>
import axios from 'axios'
import { ref } from 'vue'

const table = ref(null)
const name = ref('')
const email = ref('')

const inputData = async () => {
  try {
    let param = {
      name: '유혁스쿨',
      email: 'webdevyoo@gmail.com'
    }
    const res = await axios.post('http://localhost:3000/member', param);
    console.debug("전송완료\n응답상세내용: ", res)
  } catch(err) {
    console.error("서버에 이상이 있습니다\n오류상세내용: ", err)
  }
  console.log("비동기적 호출")
}

const getData = async () => {
  try {
    const res = await axios.get('http://localhost:3000/member')
    console.debug("전송완료\n응답상세내용: ", res)
  } catch(err) {
    console.error(err)
  }
}

</script>

<template>
  <button @click="inputData" class="btn btn-primary ms-3">데이터 입력</button>
  <button @click="getData" class="btn btn-success ms-3">데이터 가져오기</button>
  <div ref="table">
  </div>
</template>

<style scoped>
div {
  margin-top: 10px
}
</style>
