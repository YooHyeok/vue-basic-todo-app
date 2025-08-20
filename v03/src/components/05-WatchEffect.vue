<script setup>

import { ref, reactive, watchEffect } from 'vue';


const counter = () => {
  count.value ++;
}

const updateName = () => {
  name.value = name.value == '홍길동' ? '전우치' : '홍길동'
}
const updateMeta = () => {
  meta.value = meta.value == null ? '메롱' : null
}

const count = ref(1)
const name = ref('홍길동')
const meta = ref(null)

/**
 * 콜백 함수에 언급되는 반응형 변수들이 감시 대상이 된다.
 */
watchEffect(() => {
  console.log(`count는 ${count.value} 이다.`)
})
watchEffect(() => {
  console.log(`이름은 ${name.value} 이다.`)
})
watchEffect(() => {
  console.log(`meta는 ${meta.value} 이다.`)
})
watchEffect(() => {
  console.log(`count는 ${count.value} 이다. 이름은 ${name.value} 이다. meta는 ${meta.value} 이다.`)
})

</script>

<template>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/05-WatchEffect.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>Watch Effect</h1>
  <p>count : {{ count }}</p>
  <p>name : {{ name }}</p>
  <p>meta : {{ meta }}</p>
  <hr>
  <button @click="counter">클릭</button>
  <button @click="updateName">이름 변경</button>
  <button @click="updateMeta">meta 변경</button>
</template>
