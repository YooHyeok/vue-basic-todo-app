<script>
export default {
  data: function() {
    return {
      userName: '유혁스쿨',
      num: 0
    }
  },
  methods: {
    greeting(userName) {
      if (userName) return ' Hi, there ' + userName
      return ' Hi, there ' + this.userName // vue 속성에서 data에 접근할때는 this키워드로 접근한다.
    },
    increment() {
      this.num ++;
    },
    decrement() {
      this.num --;
    }
  }
}
</script>
<template>
  <div>
    <hr/>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/05-Methods.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>
    <h1>텍스트보간 호출</h1>
    <h3>{{ greeting() }}</h3>
    <h3>{{ greeting('코더홀릭') }}</h3>
    <hr/>
    
    <h1>이벤트 바인드</h1>
    <p>{{ num }}</p>
    <button v-on:click="increment">Increse Number</button>
    <button v-on:click="decrement">Decrese Number</button>
    <hr/>
  </div>
</template>
<style></style>