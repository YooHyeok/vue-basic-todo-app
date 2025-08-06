<script>
export default {
  data: function() {
    return {
      /* 객체 리터럴 바인드 */
      isActive: true,
      hasError: true,
      /* 객체 바인드 */
      // class: { bg: true, 'text-danger': true },
      /* 배열 리터럴 바인드 */
      bgClass: 'bg',
      erClasS: 'text-danger',
    }
  },
  computed: {
    class() {
      return {
        bg: this.isActive,
        'text-danger': this.hasError,
      };
    }
  }
}
</script>
<template>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/09-ClassBind.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>클래스 바인드</h1>
  <hr/>
  <div class="container">
    <!-- 좌측 영역 -->
    <div class="left">
      <h2>객체 리터럴 바인드 - 조건부</h2>
      <div class="border" :class="{ bg: isActive, 'text-danger': hasError }">Warning</div>
      <!-- 객체 바인딩 기법 - data나 조건부시 computed 값을 적용한다. -->
      <h2>객체 바인드 - computed 및 조건부</h2>
      <div class="border" :class>Warning</div>
      <!-- 배열 바인딩 기법 - 조건부 3항 연산자 사용이 가능하다. -->
      <h2>배열 리터럴 바인드 - 조건부</h2>
      <div class="border" :class="[isActive ? bgClass : '', hasError ? erClasS: '']">Warning</div>
    </div>
    <!-- 중앙 선 -->
    <div class="divider"></div>
     <!-- 우측 영역 -->
    <div class="right">
      
    </div>
  </div>
</template>
<style>
.border { border : 2px solid red; }
.bg { background-color: gray; }
.text-danger { color: red }
.container {
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  max-width: 1980px;
  max-height: 650px;
  align-items: start;
  gap: 0;
}

.left, .right {
  padding: 20px;
  overflow: auto;
}

.divider {
  background-color: black;
  width: 2px;
  height: 100%;
}
</style>