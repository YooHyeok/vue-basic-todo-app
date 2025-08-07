<script>
export default {
  data: function() {
    return {
      chk: false,
      flag: false,
      firstName: 'John',
      lastName: 'Doe',
    }
  },
  /**
   * 1. Caching: 계산 결과를 기억해둔 뒤, 다음 호출시 재계산 하지 않고 기억해둔 값을 반환
   * 2. Reactive: 종속된 값의 변화가 발생했을 때 재계산을 해서 캐싱한 후 데이터 반환
   * 3. 읽기 전용이지만 getter/setter를 이용하여 읽기/쓰기도 가능하다.
   */
  computed: {
    yesNo() {
      return this.chk ? "예" : "아니오"
    },
    yesNoGetSet: {
      get() {
        return this.flag == true || this.flag == "아니오" ? "예" : "아니오"
      },
      set(value) {
        this.flag = value
      }
    },
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      set(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length -1];
      }
    }
  },
  methods: {
    changeYesNo() {
      this.yesNoGetSet = !this.flag
    }
  }
}
</script>
<template>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/11-Computed.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>Computed 계산된 속성</h1>
  <hr/>
  <div class="container">
    <!-- 좌측 영역 -->
    <div class="left">
      <h2>Computed 미적용 chk</h2>
      <input type="checkbox" v-model="chk"> {{ chk }}
      <br>
      <hr>
      
      <h2>Computed 적용 yesNo</h2>
      <input type="checkbox" v-model="chk"> [최초 계산]: {{ yesNo }} [캐싱된 값]: {{ yesNo }}
      <br>
      <hr>

      <h2>Computed get/set 적용</h2>
      <input type="checkbox" v-model="flag"> [최초 계산]: {{ yesNoGetSet }} [캐싱된 값]: {{ yesNoGetSet }}
      <br>
      <br>
    
      <button @click="changeYesNo">변경</button>
      <hr>
    </div>
    <!-- 중앙 선 -->
    <div class="divider"></div>
     <!-- 우측 영역 -->
    <div class="right">
      <!--  -->
      <h2>양방향 바인딩을 활용한 computed get/set</h2>
      <p>[Full Name]: {{ fullName }}</p>
      <input type="text" v-model="fullName" placeholder="Enter full name">
      <p>[First Name]: {{ firstName }}</p>
      <p>[Last Name]: {{ lastName }}</p>
      <br>

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