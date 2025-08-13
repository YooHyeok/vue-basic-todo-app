<script>
export default {
  props: {
    giftProp: {
      type: String,
      required: false,
      default: ""
    }
  },
  inject: {
    giftInjectPrimitive: {
      type: () => {},
      required: false,
      default: ""
    },
    giftInjectObject: {
      type: Object,
      required: true
    },
    onChangeInject: {
      type: Function,
      required: true
    }
  }
}
</script>
<template>
  <div>
    <h1>손자 컴포넌트</h1>
    <p>할아버지로 부터 받은 선물(Prop): {{ giftProp }}</p>
    <p>할아버지로 부터 받은 선물(Provide-Primitive): {{ giftInjectPrimitive }}</p>
    <p>할아버지로 부터 받은 선물(Provide-Object): {{ giftInjectObject.value }}</p>
    <button @click="onChangeInject">Inject 수정</button>
  </div>
</template>
<style scoped>
div {
  width: 380px;
  height: 170px;
  border: 1px solid blue;
  margin: 10px;
}
</style>