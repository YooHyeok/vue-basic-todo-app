<script>
export default {
  data() {
    return {
      child: '자식prop',
    }
  }
}
</script>
<template>
  <button>
    <slot :child>부모 컴포넌트로 props 전달</slot><!-- 부모에게 props 전달 -->
  </button>
</template>
<style scoped>
</style>