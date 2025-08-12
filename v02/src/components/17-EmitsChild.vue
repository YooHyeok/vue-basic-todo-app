<script>
export default {
  // props:  ["name", "age"]
  props:  {
    name: {
      type: String,
      required: false,
      default: () => ''
    },
    age: {
      type: Number,
      required: false,
      default: () => ''
    },
  },
  data() {
    return {
      c: 5
    }
  }
}
</script>
<template>
  <hr/>
  <h1>EmitsChild Component({{ c }})</h1>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/17-EmitsChild.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <input type="text" ref="myInput" v-model="c">
  <button @click="$emit('createPost', this.$refs.myInput.value)">Emits를 통한 부모이벤트 호출</button>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <button @click="$emit('emitsUpdater', 30)">Emits를 통한 부모 data 수정시도</button>
</template>
<style>
</style>