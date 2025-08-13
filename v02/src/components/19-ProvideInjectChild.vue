<script>
import GrandSon from "@/components/19-ProvideInjectChildChild.vue"
export default {
  components: {
    GrandSon
  },
  props: {
    giftProp: {
      type: String,
      required: false,
      default: ""
    }
  },
}
</script>
<template>
  <div class="child">
    <h1>자식 컴포넌트</h1>
    반가워요. 저는 자식 그 자식컴포넌트입니다.
    <GrandSon :giftProp/>
  </div>
</template>
<style scoped>
h1 {
  color: blue
}
.child {
  width: 400px;
  height: 300px;
  border: 1px solid red;
}
</style>