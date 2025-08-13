<script>
export default {
  props: {
    buttonName: {
      type: String,
      default: ""
    }
  },
}
</script>
<template>
  <button v-if="buttonName == ''" class="fancy-btn">
    <slot>
      <strong>디폴트문자</strong> <!-- Slot을 적용할 컴포넌트에 아무것도 할당하지 않을경우 출력되는 노드 -->
    </slot>
  </button>
  <button v-else="buttonName" v-html="buttonName"></button>
</template>
<style scoped>
</style>