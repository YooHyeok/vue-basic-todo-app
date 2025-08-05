<script>
export default {
  data: function() {
    return {
      ...this.daum(),
      msg: 'DOM 속성 동적 바인딩'
    }
  },
  methods: {
    daum: function () {
      return {
        site_name : "Daum",
        url: 'https://daum.net',
        src: 'https://search1.daumcdn.net/search/statics/common/pi/logo/logo_D112x112_241223.svg'
      }
    },
    init: function () {
      // this = {...this, ...this.daum()} // this에 데이터를 병합하기 위해서는 Object.assign을 사용해야한다.
      Object.assign(this, this.daum());
    },
    clickAr: function() {
      const item = {
        site_name : "ZUM",
        url: 'https://zum.com',
        src: 'https://search.zumst.com/images/logo.svg?_LM=1753404612000'
      }
      Object.assign(this, item);
    }
  }
}
</script>
<template>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/07-VBind.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>{{ msg }}</h1>
  <hr/>
  <div class="container">
    <!-- 좌측 영역 -->
    <div class="left">
      <h2>하이퍼링크 url 바인드</h2>
      <a target="_blank" v-bind:href="url">{{ site_name }}</a>
      <hr>
      <h2>이미지 src 바인드</h2>
      <!-- :(콜론) : v-bind 축약형  -->
      <img :src="src">
      <!-- vue3 부터는 속성명과 변수명이 같을 경우 :이름 과 같이 간결하게 표현 가능하다. -->
      <img :src>
      <hr>
      <button @click="clickAr">변경</button>
      <button @click="init">초기화</button>
    </div>
    <!-- 중앙 선 -->
    <div class="divider"></div>
     <!-- 우측 영역 -->
    <div class="right">
      
    </div>
  </div>
</template>
<style>
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