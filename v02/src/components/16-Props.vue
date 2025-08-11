<script>
import PropsChild from '@/components/16-PropsChild.vue'
export default {
  components: {
    PropsChild
  },
  data() {
    return {
      name: '유혁스쿨',
      age: 34
    }
  },
  methods: {
    propsUpdater(data) {
      this.age = data;
    },
    ageInc() {
      this.age++
    }
  }
}
</script>
<!-- 
props
부모 컴포넌트에서 자식 컴포넌트로의 데이터 전달 수단하는 기능,속성이다.  
상위 속성이 업데이트되면 하위 속성이 업데이트된다.  
즉, 부모 컴포넌트에서 변경이 되면 자식 컴포넌트에도 변경이 되는 것을 말한다.  
그 반대인 하위 속성에서 업데이트 할 경우 상위 속성에서는 업데이트를 허용하지 않는 단방향 데이터 흐름을 갖는다.  
그렇다면 자식에서 부모의 data를 props로 받은 뒤 어떻게 변경할까?  
vue에서는 함수 타입도 props로 전달할 수 있다.  
부모에서 매개변수를 받은 뒤 data를 변경하는 기능을 가진 함수를 정의하고, 자식 컴포넌트에 props로 전달한 후 자식 컴포넌트에서 해당 함수에 매개변수를 전달하여 호출면 값을 변경할 수 있다.  
해당 방식은 React에서 1뎁스 등의 단순한 컴포넌트 깊이 관계에서 사용하는 부모 데이터 변경 방식이다.  
그러나 vue에서는 해당 방법을 권장하지 않는다.  
부모 자식간 결합도 측면에서나 혹은 vue-devtools 등 추적이 어렵기 때문에, 대안으로 부모 컴포넌트에 정의된 이벤트를 실행하는 방식인 emits를 사용한다.  
해당 방식은 다음 챕터에서 다룬다.  
-->
<template>
  <hr/>
  <h1>Props Component (부모) </h1>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/16-Props.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <button @click="ageInc">부모 age 증가 - age ++</button> 
  <PropsChild :name :age :propsUpdater/>
</template>
<style>
</style>