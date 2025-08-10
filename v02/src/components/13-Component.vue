<script>
import LocalComponent from '@/components/13-LocalComponent.vue'
export default {
  components: {
    LocalComponent
  }
}
</script>
<!-- 
Vue 컴포넌트는 UI를 구성하는 독립적인 재사용 가능 블록이다.  
재사용, 유지보수, 단순화  
작은 단위로 컴포넌트를 캡슐화해서 만듦으로써 코드 가독성이 좋고, 수정 및 유지보수가 용이해진다.  
복잡한 UI를 구성할 때 컴포넌트 단위로 분리할 경우, 데이터의 흐름 등 로직 분리에 도움을 준다.  
컴포넌트는 지역 등록과 전역 등록 방식이 있다.  
지역 등록의 경우 import를 통해 등록하여 사용하는 것을 의미한다.  
전역 등록의 경우 main.js에 import 후 Vue 인스턴스에 등록하여 사용할 곳에서 추가적인 지역 등록 필요 없이 바로 이용 가능하다.  
HTML 태그 형태로 사용할 곳에 삽입한다.  
-->
<template>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/12-Watch.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>컴포넌트</h1>
  <hr/>
  <div class="container">
    <!-- 좌측 영역 -->
    <div class="left">
      <LocalComponent/>
    </div>
    <!-- 중앙 선 -->
    <div class="divider"></div>
     <!-- 우측 영역 -->
    <div class="right">
      <GlobalComponent/>
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