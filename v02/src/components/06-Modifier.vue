<script>
export default {
  data: function() {
    return {
      click_yes: true,
      kValue: '',
      x: 0,
      y: 0,
      msg: ''
    }
  },
  methods: {
    createAlertFlag() {
      if (this.click_yes) {
        alert('경고창 출력')
        this.click_yes = false
      }
    },
    createAlertOnce() {
      alert('경고창 출력')
    },
    getKey(e) {
      this.kValue = e.key;
    },
    mousePos(e) {
      console.log(e)
      this.x = e.offsetX
      this.y = e.offsetY
    },
    mouseClick(e) {
      this.msg += this.x + ',' + this.y + '\n'
    }
  }
}
</script>
<template>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/06-Modifier.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>이벤트 수정자</h1>
  <hr/>
  <div class="container">
    <!-- 좌측 영역 -->
    <div class="left">
      <h2>flag 처리</h2>
      <button v-on:click="createAlert">경고창 호출 - flag</button>
      <!-- click.once : 한번만 반응 -->
      <h2>click.once</h2>
      <button v-on:click.once="createAlertOnce">경고창 호출- once</button>
      <hr/>
      <!-- keydown.s : s key가 눌렸을때 이벤트 핸들러 실행 -->
      <h2>keydown.s</h2>
      <input type="text" v-on:keydown.s="getKey"/>
      <span>{{ kValue }}</span>
      <h2>keydown.alt.s</h2>
      <!-- keydown.alt.s : alt + s key가 눌렸을때 이벤트 핸들러 실행 - .enter .tab .delete .esc .space .up .down .left .right .center(마우스 휠 클릭) -->
      <input type="text" v-on:keydown.alt.s="getKey"/>
      <span>{{ kValue }}</span>
      <hr/>
      <!-- click.right / prevent: 이벤트의 기본 기능을 막아준다 e.preventDefault()와 같음 -->
    </div>
    <!-- 중앙 선 -->
    <div class="divider"></div>
    <div class="right">
      <h2>좌표 출력 - mousemove</h2>
      <h3>기본클릭 - 현재 좌표 출력: click</h3>
      <h3>우출력 - 삭제: click.right.prevent</h3>
      <div id="display" 
        style="user-select: none;" 
        v-on:mousemove="mousePos" 
        v-on:click="mouseClick" 
        v-on:click.right.prevent="msg = ''"
      >
        x: {{ x }} <br>
        y: {{ y }}
      </div>
      <textarea>{{ msg }}</textarea>
    </div>
  </div>
</template>
<style>
#display {
  width: 161px;
  height: 55px;
  background-color: goldenrod;
}
textarea {
  height: 190px;
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