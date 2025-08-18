<script setup>

import { ref, reactive, watch } from 'vue';


const counter = () => {
  cnt1.value ++;
  cnt2.value ++;
  obj2.value.age ++; 
  obj3.age ++;
}

/**
 * arg1: 감시대상
 * arg2: 콜백함수
 *   - arg1: new
 *   - arg2: old
 *   - arg3: option
 */

const cnt1 = ref(1)
const obj1 = reactive({oldV:null, newV:null})

watch(cnt1, (n, o) => {
  console.log(`cnt1: ${o} => ${n} - immediate:false`)
  obj1.oldV = o
  obj1.newV = n
})

/**
 * immediate: 값이 변경되지 않더라도 처음 값을 읽어 들이는 시점에 호출 여부를 결정 - 생략시 기본값 false
 */
const cnt2 = ref(0);
watch(cnt2, (n, o) => {
  console.log(`cnt2: ${o} => ${n} - immediate:true`)
}, {immediate: true})


/**
 * 객체 타입에서 특정 속성에 대한 감지를 하기 위해서는 getter를 사용해야 한다.  
 * 단순히 감지대상을 `obj.value.속성` 이렇게만 처리할 경우 속성에 대한 값 그 자체를 감시 대상으로 지정해버리기 때문이다.  
 * watch에서는 감지 대상자에 ref를 등록하면 내부적으로 getter가 호출되어 반응성을 추적한다.  
 * 그러나 object의 속성을 접근할 경우 값 그 자체이므로 getter를 통해 접근할 수 있도록 함수로 한번 감싸줘야한다.  
 * 이것은 기본타입의 ref에도 마찬가지이다.  
 * primitive ref를 감시대상으로 지정할 때, watch(count.value, …)와 같이 값 자체를 넣으면 변경이 추적되지 않으므로, 
 * watch(count, …)처럼 ref 변수명 자체를 감시 대상으로 사용해야 한다.
 */
const obj2 = ref({name: '홍길동', age: 30})

watch(obj2.value.age, (n, o) => {
  console.log('obj2.value.age 직접 감지')
})

watch(() => obj2.value.age, (n, o) => {
  console.log('obj2.value.age getter 접근')
})

/**
 * deep: watch 대상의 데이터가 하위 속성을 가지고 있는 객체인 경우, 하위 속성 감지 여부를 결정 - 생략시 기본값 false
 * object타입의 ref에서 object의 값을 통으로 변경하지 않고, 속성 값을 변경할 경우 감지되지 않는다.  
 * 기본적으로 object 타입의 ref가 감지되는 범위는 얕은 감지로 값 자체의 변경만 감지한다.  
 * 만약 객체의 변경을 감지하기 위해서는 감시 대상을 value로 접근하도록 선언해주거나 3번째 매개변수로 deep 속성을 사용해야 한다.
 * (reactive의 경우 기본적으로 깊은 감지 까지 가능하다.)
 */

watch(obj2, (n, o) => {
  console.log('얕은 감지 - obj2접근')
}, {deep: false})

watch(obj2.value, (n, o) => {
  console.log('얕은 감지 - obj2.value접근')
}, {deep: false})

watch(obj2, (n, o) => {
  console.log('깊은 감지 - obj2접근')
}, {deep: true})

const obj3 = reactive({name: '홍길동', age: 30})
watch(obj3, (n, o) => {
  console.log('얕은 감지 - obj3접근')
}, {deep: false})

/**
 * watch의 감시대상자가 Object 타입일 경우(ref, reactive 모두) 이전값을 가져오지 못하는 현상이 있다.  
 * 이전 deep 옵션과 같이 watch는 기본적으로 얕은 감시(복제)만 하기 때문에 
 * Object를 감시대상자로 지정할 경우 Object가 통째로 변경하는 것이 아닌 속성만 변경될 경우 이전값에 대한 보장을 하지 않는다.  
 * Vue는 watch를 통해 감시할때 변경되는 시점에 해당 값을 보관했다가 old와 new를 반환해 주는데, 객체의 경우 참조가 같기 때문에 속성 변경시에는 같은 객체를 가리키기 때문이다.  
 * 따라서 이 경우 감시 대상 객체를 전개연산자로 {...obj.value}와 같이 얕게 복사하거나 JSON.parse(JSON.stringify(obj.value))를 통해 깊은 복사를 하여 감지 대상으로 설정하면 
 * 완전히 새로운 객체가 생성되어 참조가 바뀌기 때문에 이전 값과 비교가 가능해진다.
 * (단, 이 경우는 큰 데이터일 수록 성능이 떨어진다.)
 */
watch(
  () => ({ ...obj2.value }), // 객체를 펼쳐서 얕은 복사본 반환
  (n, o) => {
    console.log('obj2.value - 이전 값:', o, '새 값:', n)
  },
  { deep: true }
)

watch(obj2, (n, o) => {
    console.log('obj2.value - 이전 값:', JSON.stringify(o), '새 값:', JSON.stringify(n))
  },
  { deep: true }
)


watch(
  () => ({ ...obj3 }), // 객체를 펼쳐서 얕은 복사본 반환
  (n, o) => {
    console.log('obj3.value - 이전 값:', o, '새 값:', n)
  },
  { deep: false }
)


</script>

<template>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/04-Watch" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <p>cnt1 : {{ cnt1 }}</p>
  <p>old : {{ obj1.oldV }} / new : {{ obj1.newV }}</p>
  <hr>
  <p>cnt2 : {{ cnt2 }}</p>
  <p>old : {{ obj2.name }} / new : {{ obj2.age }}</p>
  <button @click="counter">클릭</button>
</template>
