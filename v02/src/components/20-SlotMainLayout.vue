<script>
export default {
  props: {
    buttonName: {
      type: String,
      default: ""
    }
  }
}
</script>
<template>
  <!-- 이름을 부여하여 slot을 식별한다. (이름을 부여하지 않을 경우 default를 부여한다 - ex: 부모 컴포넌트에서 v-slot:default 혹은 #default로 식별)-->
  <slot name="header"></slot>
  <slot></slot>
  <slot name="footer"></slot>
</template>
<style scoped>
</style>