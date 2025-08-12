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
    propsUpdater: {
      type: Function,
      required: true, 
      default: function () {
        return () => {}
      }
    }
  },
  methods: {
    /**
     * 단방향 props 양방향 수정시 오류 발생 - Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'age'
     */
    childAgeUpdater() {
      this.age = 30;
    },
   updater() {
    this.propsUpdater(30)
   }
  }
}
</script>
<template>
  <hr/>
  <h1>PropsChild Component</h1>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/16-PropsChild.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <p>Name: {{ name }}</p>
  <p>Age: {{ age }}</p>
  <button @click="childAgeUpdater">자식에서 props 수정시도</button> 
  <button @click="updater">Function props로 부모 data 수정시도</button> 
</template>
<style>
</style>