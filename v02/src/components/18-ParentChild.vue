<script>
export default {
  props: {
    value: {
      type: Number,
      required: false,
      default: () => 0
    }
  },
  methods: {
    callParentMethod() {
      console.log(this.$parent)
      this.$parent.value ++
      console.log("부모 인스턴스 data value 증가")
      this.$parent.changeParentData();
    }
  }
}
</script>
<template>
  <div>
    <hr/>
    <h1>자식 컴포넌트</h1>
    <h1> this.$parent.value : {{ this.$parent.value }}</h1>
    <h1> 부모 props value : {{ value }}</h1>
    <button @click="callParentMethod">F12 확인</button>
  </div>
</template>

<style scoped>
</style>
