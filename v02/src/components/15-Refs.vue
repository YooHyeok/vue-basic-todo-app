<script>
export default {
  /* 
  Ref는 DOM요소에 고유한 참조자를 제공하는 특별한 속성이다.
  순수 자바스크립트에서는 DOM의 id속성을 고유한 참조자로 사용하는것과 같이
  vue에서는 ref를 고유한 참조자로 사용한다.  

  - 순수 자바스크립트
    - DOM: `<input type="text" id="myInput">`
    - 접근: `document.getElementById("myInput").value`
  - Vue.js
    - DOM: `<input type="text" ref="myInput">`
    - 접근(vue2): `this.$refs.myInput.value`
    - 접근(vue3): `const myInput = ref(null)`
  */
  methods: {
    logInput() {
      console.log("this.$refs.myInput : ", this.$refs.myInput)
      console.log("this.$refs.myInput.value : ", this.$refs.myInput.value)
      console.log("document.getElementById('myInput') : ", document.getElementById('myInput'))
      console.log("document.getElementById('myInput').value : ", document.getElementById('myInput').value)
    }
  }
}
</script>
<template>
  <div>
    <hr/>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/15-Refs.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>
    <h1>F12를 눌러 개발자도구 콘솔을 확인하세요.</h1>
    <input type="text" ref="myInput" id="myInput" value="F12를 눌러 개발자도구 콘솔을 확인하세요." style="width: 250px;">
    <button @click="logInput">F12 확인</button>
  </div>
</template>

<style scoped>
</style>
