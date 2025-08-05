<script>
export default {
  data: function() {
    return {
      inputName: '홍길동',
      agree: false,

      itemName: null,
      itemCnt: null,
      sList: [
        { name: '감귤', cnt: 2 }
      ]
    }
  },
  methods: {
    addItem() {
      if (!this.itemCnt) {
        alert('수량을 선택해 주세요.');
        return;
      }
      let item = {
        name: this.itemName,
        cnt: this.itemCnt,
      }
      this.sList.push(item)
      this.itemName = null
      this.itemCnt = null
    }
  }
}
</script>
<!-- 
양방향 바인딩 설명에 앞서 단방향 바인딩에 대해 먼저 이해하자.  
js → HTML 방향으로 데이터가 흐르는것을 단방향으로 바인딩이라고 부른다.  
v-bind를 통해 input 태그의 value 속성을 동적으로 변경할 수 있다.  
이것은 js에 의해 html의 데이터를 조작하는것으로 데이터가 js → HTML 방향으로 흐른다.

양방향 바인딩은 단방향을 포함하여 반대로 js ← HTML로도 데이터가 흐르는것을 말한다.  
input에 데이터를 입력했을 때 v-bind를 적용한 js 변수의 값이 변경된다.  
input 이벤트에 이벤트핸들러함수를 연결하고, 함수에서 event로부터 받은 DOM에 할당된 현재 value값을 추출해 v-bind를 적용한 변수에 직접 할당한다.

v-model은 위와같은 양방향 바인딩 수동작업을 변수 할당만으로 자동으로 처리해준다.
즉, v-model은 내부적으로 v-bind:value="변수"와 @input="변수=$event.target.value" 의 매커니즘으로 동작하게 된다.
-->
<template>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/07-VModel.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>양방향 바인딩</h1>
  <hr/>
  <div class="container">
    <!-- 좌측 영역 -->
    <div class="left">
      <h2>input text 바인딩</h2>
      <input type="text" v-model="inputName">
      <p>{{ inputName }}</p>
      <hr>
      <h2>input checkbox 바인딩</h2>
      <p>이 약관에 동의하십니까?</p>
      <input type="checkbox" id="agree" v-model="agree"><label for="agree">{{ agree }}</label>
      <button v-show="agree">가입하기</button>
      <hr>
      
    </div>
    <!-- 중앙 선 -->
    <div class="divider"></div>
     <!-- 우측 영역 -->
    <div class="right">
      <h1>상품 추가 목록 조회</h1>
      <form v-on:submit.prevent="addItem">
        <p>품목: <input type="text" required v-model="itemName"></p>
        <p>수량:
          <select v-model="itemCnt">
            <option value="null">선택</option>
            <option value="1">1개</option>
            <option value="2">2개</option>
            <option value="3">3개</option>
            <option value="4">4개</option>
            <option value="5">5개</option>
          </select>
        </p>
        <button >상품 추가</button>
        <p>구입할 항목 : </p>
        <ul>
          <li v-for="item in sList">{{ item.name }} ({{ item.cnt }}개)</li>
        </ul>
      </form>
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