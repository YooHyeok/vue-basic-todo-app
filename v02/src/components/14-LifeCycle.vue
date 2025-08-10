<script>
import LifeCycleChild from '@/components/14-LifeCycleChild.vue'
export default {
  components: {
    LifeCycleChild
  },
  data: function() {
    return {cnt: 1}
  },
  /* 
  Vue에는 생명주기마다 사용할 수 있는 method가 존재하며, hook이라고 부른다.
  hook은 갈고리라는 뜻을 가지고 있어 마치 프로그래밍에서 '원래 존재하는 어떤 기능에 갈고리를 거는 것 처럼 끼어 들어가 같이 수행하는 것' 을 의미한다.  
  생명주기마다 메소드를 실행할 수 있다.
  생명주기 호출 순서는 자식컴포넌트부터 실행된다.
  
  부모 beforeUpdate에서 자식컴포넌트를 렌더링 (v-if flag 변경)할 경우 updated가 되기전에 자식의 훅이 먼저 실행된다.  
  만약 props로 자식컴포넌트에게 데이터를 보낸 후 부모컴포넌트에서 props값을 변경한다면 이 역시 자식 updated가 먼저 변경된다.  
  이는, Vue의 렌더링 흐름이 안쪽에서 바깥쪽으로 흐르기 때문이다.  
  자식 DOM이 먼저 변경되고, 부모 DOM이 바뀌는 구조이다.  

  destroy 관련 훅은 서버 렌더링시 호출되지 않는다.  
  beforeDestroy의 경우 뷰 인스턴스가 제거되기 직전에 호출되며 원래 모습과 모든 기능들을 가지고 있기 때문에, 이벤트 리스너를 제거할때 사용하는것이 제격이다.  
  destroyed는 거의 사용하지 않거나, 매우 특수한 경우(예: 외부 시스템에 '컴포넌트 종료 완료' 알림) 등에만 활용된다.
  */
  beforeCreate()  { console.log("beforeCreate") },
  created()       { console.log("created") },
  beforeMount()   { console.log("beforeMount") },
  mounted()       { console.log("mounted") },
  beforeUpdate()  { console.log("beforeUpdate") },
  updated()       { console.log("updated") },
  beforeUnmount() { console.log("beforeUnmount") },
  unmounted()     { console.log("unmounted") },
  beforeDestroy() { console.log("beforeDestroy") },
  destroyed ()    { console.log("destroyed ") },
}
</script>
<template>
  <div>
    <hr/>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/14-LifeCycle.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>
    <h1>F12를 눌러 개발자도구 콘솔을 확인하세요.</h1>
    <p>{{ cnt }}</p>
    <button @click="cnt = cnt+1 ">Count+1 - Update훅 실행 및 Child 렌더링</button>
    <button @click="cnt = cnt=1 ">Chlid 해제</button>
    <LifeCycleChild v-if="cnt >= 2"/>
  </div>
</template>

<style scoped>
</style>
