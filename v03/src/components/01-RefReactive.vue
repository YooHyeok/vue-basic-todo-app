<script setup>
/**
ref, reactive
반응형 상태 변수로 사용된다.

ref
타입에 상관없이 사용되나 String, Number Boolean 등 원시타입에 주로 사용된다.  
Vue2와 동일하게 DOM에 접근할때도 사용된다.

reactive
Object, Array, Map, Set 같은 참조타입만 사용할 수 있다.  
 */

import { ref, reactive } from 'vue';

const h1 = ref(null)

const count = ref(0);

const obj1 = reactive({
  name: 'kim', age: 33
})

const array1 = reactive([])

const good = () => {
  count.value++;
  obj1.name = 'yoo'
  obj1.age = 34
  console.log("h1: ", h1.value)
  h1.value.innerText += "innerText+=바보 실행됨"
  array1.push(obj1)
}

</script>

<template>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/01-RefReactive.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1 ref="h1">Ref DOM 접근</h1>
  <p>count : {{ count }} </p>
  <p>obj1 : {{ obj1.name }} / {{ obj1.age }}</p>
  <p>array1 : {{ array1 }}</p>

  <button @click="good">클릭</button>
</template>
