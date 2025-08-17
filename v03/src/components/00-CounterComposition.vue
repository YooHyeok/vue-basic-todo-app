<script>
/**
Composition API

Vue3에서 새롭게 등장한 함수 기반의 API로
컴포넌트 로직을 유연하게 구성하도록 지원하여 코드의 재사용성과 가독성을 높여준다.

Options API와의 비교

Options API: 컴포넌트 로직을 data, methods, computed, watch 등의 옵션에 담아서 구분함.
Composition API: Vue3에서 새로 도입된 방식으로 함수형 프로그래밍 스타일과 유사
관련 로직을 setup hook에 정의하여 사용하며 코드 재사용성이 높아져서 큰 프로젝트에 적합함.
 */
import { ref, computed } from 'vue';

export default {
  setup() {
    const cnt = ref(0)
    const counter = () => cnt.value ++;
    const oddEven = computed(() => cnt.value % 2 ? '홀수' : '짝수'); 
    return {
      cnt, 
      counter, 
      oddEven
    }
  }
}
</script>

<template>
  <p> {{ cnt }} </p>
  <p>홀짝 판별: {{ oddEven }}</p>
  <button @click="counter">클릭</button>
</template>
