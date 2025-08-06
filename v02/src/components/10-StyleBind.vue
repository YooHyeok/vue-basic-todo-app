<script>
export default {
  data: function() {
    return {
      widthStr: '200px',
      width: 200,
      styleEl: {
        width: '200px'
      }
    }
  },
  computed: {
    style() {
      return {
        width: this.width + 'px'
      }
    }
  },
  methods: {
    incWidth() {
      this.width += 10;
    },
    initWidth() {
      this.width = 200;
    }
  }
}
</script>
<template>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/10-StyleBind.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>스타일 바인드</h1>
  <hr/>
  <div class="container">
    <!-- 좌측 영역 -->
    <div class="left">
      <!-- 객체 리터럴 바인드1 - data 문자열 -->
      <h2>객체 리터럴 바인드1 - data 문자열</h2>
      <div class="demo" :style="{width: '200px'}"></div>
      <br>
      <!-- 객체 리터럴 바인드2 - data 연산 (숫자 + 'px') -->
      <h2>객체 리터럴 바인드2 - data 연산 (숫자 + 'px')</h2>
      <div class="demo" :style="{width: widthStr}"></div>
      <br>
      <!-- 배열 바인드 - data 연산 (숫자 + 'px') -->
      <h2>배열 바인드 - data 연산 (숫자 + 'px')</h2>
      <div class="demo" :style="[styleEl]"></div>
      <br>
    </div>
    <!-- 중앙 선 -->
    <div class="divider"></div>
     <!-- 우측 영역 -->
    <div class="right">
      <!-- 객체 리터럴 바인드3 - data 연산 (숫자 + 'px') 및 증가 -->
      <h2>객체 리터럴 바인드3 - data 연산 (숫자 + 'px') 및 증가</h2>
      <div class="demo" @mouseover="initWidth" :style="{width: width + 'px'}">마우스 오버 초기화</div>
      <button @click="incWidth">버튼을 클릭해 보세요.</button>
      <br>
      <!-- 객체 바인드 - computed 및 data 연산 (숫자 + 'px') 및 증가 -->
      <h2>객체 바인드 - computed 및 data 연산 (숫자 + 'px') 및 증가</h2>
      <div class="demo" @mouseover="initWidth" :style>마우스 오버 초기화</div>
      <button @click="incWidth">버튼을 클릭해 보세요.</button>
      <br>
      <!-- 배열 바인딩 기법 - 조건부 3항 연산자 사용이 가능하다. -->
      <h2>배열 바인드 - computed 및 data 연산 (숫자 + 'px') 및 증가</h2>
      <div class="demo" @mouseover="initWidth" :style="[style]">마우스 오버 초기화</div>
      <button @click="incWidth">버튼을 클릭해 보세요.</button>
      <br>
    </div>
  </div>
</template>
<style>
.demo {
  width: 100px;
  height: 100px;
  background-color: blueviolet;
}
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