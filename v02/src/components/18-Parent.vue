<script>
import ParentChild from '@/components/18-ParentChild.vue'
export default {
  /* 
  $parent  
  자식 요소에서 부모 인스턴스에 접근할 수 있다.
  prop과 emit을 통한 컴포넌트간 데이터 전달 및 조작의 대안으로써 사용할 수 있다.
  부모 인스턴스에 접근하여 data를 조작할 수 있고, 메소드를 호출할 수 있게 된다.
  
  주의사항
  부모 요소의 데이터를 자식 요소에서 변경하는 경우 부모 요소에 접근하는 것은 디버깅의 편의성과 코드 가독성을 크게 해친다.  
  다른사람 혹은 시간이 지나 해당 컴포넌트를 보았을 때 어디서 변경이 발생하였는지를 추적하는 것이 굉장히 어려워 질 수 있다.  
  */
 components: {
   ParentChild
 },
  data() {
    return {
      value: 0
    }
  },
  methods: {
    changeParentData() {
      console.log("부모 인스턴스 메소드 changeParentData 호출")
      this.value ++;
    }
  }
}
</script>
<template>
  <div>
    <hr/>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/18-Parent.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>
    <h1>부모 컴포넌트 - F12를 눌러 개발자도구 콘솔을 확인하세요.</h1>
    <ParentChild :value/>
  </div>
</template>

<style scoped>
</style>
