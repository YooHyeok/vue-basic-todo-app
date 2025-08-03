<script>
export default {
  data: function() {
    return {
      click_yes: true,
      kValue: ''
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
    }
  }
}
</script>
<template>
  <div>
    <hr/>
    <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/06-Modifier.vue" style="text-decoration: none; color: blue;">
      <h1 style="cursor: pointer;">코드 보러 가기</h1>
    </a>
    <hr/>
    <h1>이벤트 수정자</h1>
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
  </div>
</template>
<style></style>