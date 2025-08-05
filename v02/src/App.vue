<script>
import DataBind from '@/components/01-DataBind.vue';
import ConditRender from '@/components/02-ConditRender.vue';
import LoopRender from '@/components/03-LoopRender.vue';
import EventBind from '@/components/04-EventBind.vue';
import Methods from '@/components/05-Methods.vue';
import Modifier from '@/components/06-Modifier.vue';
import VBind from '@/components/07-VBind.vue';
import VModel from '@/components/08-VModel.vue';
export default {
  components: {
    DataBind,
    ConditRender,
    LoopRender,
    EventBind,
    Methods,
    Modifier,
    VBind,
    VModel,
  },
  // data: function() {
  data() {
    return {
      activeTab: 'DataBind',
    }
  },
}
</script>
<template>
  <!-- 헤더 탭 -->
  <div>
    <button @click="activeTab = 'DataBind'">데이터 바인드</button>
    <button @click="activeTab = 'ConditRender'">조건부 렌더링</button>
    <button @click="activeTab = 'LoopRender'">반복 렌더링</button>
    <button @click="activeTab = 'EventBind'">이벤트 바인드</button>
    <button @click="activeTab = 'Methods'">메소드 속성</button>
    <button @click="activeTab = 'Modifier'">수정자</button>
    <button @click="activeTab = 'VBind'">DOM 속성 동적 바인딩</button>
    <button @click="activeTab = 'VModel'">양방향 바인딩</button>
  </div>

  <!-- 구분선 -->
  <hr>
  <DataBind v-if="activeTab == 'DataBind'" />
  <ConditRender v-else-if="activeTab == 'ConditRender'" />
  <LoopRender v-else-if="activeTab == 'LoopRender'" />
  <EventBind v-else-if="activeTab == 'EventBind'" />
  <Methods v-else-if="activeTab == 'Methods'" />
  <Modifier v-else-if="activeTab == 'Modifier'" /> 
  <VBind v-else-if="activeTab == 'VBind'" /> 
  <VModel v-else-if="activeTab == 'VModel'" />
</template>

<style scoped>
</style>
