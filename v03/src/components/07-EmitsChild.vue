<script setup>
import { defineEmits } from 'vue';

/**
 * template 영역에서는 $emit으로 바로 접근이 가능하지만,  
 * <script setup>일 경우 script 영역에서는 defineEmits에 emit에서 식별자로 사용되는 이벤트명들을 정의한 후  
 * 반환받는 함수를 통해 emit을 호출한다.  
 * 
 * 만약 setup 함수를 사용할 경우 setup(props, {emit}) {} 방식으로 emit을 호출한다.
 */
const emit = defineEmits(['maerong']) // 배열은 생략 가능

const handleClick = () => {
  emit('maerong', '바보')
}

</script>
<template>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v03/src/components/07-EmitsChild.vue" style="text-decoration: none; color: blue;">
    <h2 style="cursor: pointer;">코드 보러 가기</h2>
  </a>
  <hr/>
  <h2>자식 컴포넌트</h2>
  <button @click="$emit('maerong', '메롱')">Click Me1</button> <!-- $emit으로 직접 접근 -->
  <button @click="handleClick">Click Me2</button>
</template>