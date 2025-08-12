<script>
import PropsChild from '@/components/17-EmitsChild.vue'
export default {
  components: {
    PropsChild
  },
  data() {
    return {
      c: 0,
      name: '유혁스쿨',
      age: 34,
    }
  },
  methods: {
    callFunction(val) {
      console.log('자식 컴포넌트에서 보낸 이벤트를 수신했어요.', val)
      this.c = val;
    },
    emitsUpdater(data) {
      this.age = data;
    },
    ageInc() {
      this.age++
    }
  }
}
</script>
<!-- 
emits

자식 컴포넌트에서 부모 컴포넌트의 data 값을 변경할때에도 emits를 사용한다.
vue-devtools 등 데이터 흐름에 대한 추적이 가능하며 부모 자식간 결합도 측면에서 더 느슨한 장점을 갖는다.  

## 함수 props 방식과 결합도 차이 및 이유
1. 함수 props 방식 (Function Prop)
  - 부모 컴포넌트가 직접 함수(구현체)를 자식에게 전달 → 자식은 구체적인 함수 내용을 알고 있으며, 직접 호출
    - 자식 컴포넌트는 부모 컴포넌트가 어떤 함수를 넘겼는지 구현 세부사항에 의존하게됨.
      - 함수 문법에 맞춰야 하기 때문.
  - 함수 시그니처가 변경되면, 자식 쪽의 코드도 함께 변경되어야 할 수 있음 → 구현과 인터페이스가 강하게 연결
    - 예를들어 함수가 공통으로 다른 기능에서 함께 사용되는 이유로 단순 호출만 하던 방식에서 매개변수를 전달해야하는 방식으로 변경될경우 자식 컴포넌트에서 매개변수를 전달해야 하는 경우 등.
  - 부모 ↔ 자식 간 인터페이스(함수 시그니처)에 대한 명확한 계약이 필요.
      
2. emit 방식
  - 자식은 단순히 특정 이벤트 발생에 대한 이벤트 이름과 데이터만 알림.
  - 부모는 이벤트를 듣고 감지하여, 자체적으로 원하는 동작을 수행 → 이벤트 이름과 전달 데이터만 알면 됨.
  - 자식은 부모의 구체적인 함수나 처리 방식에 대해 전혀 몰라도 됨 → Function prop에 비해 인터페이스가 훨씬 느슨함
    - 이벤트로 한번 씌운 후 함수를 호출하는것이기 때문에 자바로 따지면 확장 가능한 인터페이스라고 보면 된다.
  - 이벤트 이름이나 전달 데이터만 맞으면 되기 때문에 구현과 인터페이스가 분리된다.


### 함수 props도 부모의 처리 방식을 몰라도 되지 않을까?
표면적으로는 몰라도 된다고 볼 수 있다.  
하지만 실제로는 하기 이유로 결합도가 높을 수 밖에 없다.  
1. 호출 타이밍 제어권이 자식에게 있기 때문에 잘못된 시점에 호출될 수 있다.  
2. 함수 호출 형식을 emit 보다 명확하게 알아야 한다.
  - 함수 명을 직접 지정해야 하므로 이벤트명만 알아야 되는 emit에 비해 보다 명확해야 한다.
3. 구조적 종속성에 의해 부모 함수가 변경되면 자식도 수정될 수 있다

-->
<template>
  <hr/>
  <h1>Emits Component (부모) - c: {{ c }} </h1>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/17-Emits.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <button @click="ageInc">부모 age 증가 - age ++</button> 
  <PropsChild :name :age @create-post="callFunction" @emits-updater="emitsUpdater"/>
</template>
<style>
</style>