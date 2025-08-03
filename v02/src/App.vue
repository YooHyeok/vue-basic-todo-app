<script>
import DataBind from '@/components/01-DataBind.vue';
import ConditRender from '@/components/02-ConditRender.vue';
import LoopRender from '@/components/03-LoopRender.vue';
import EventBind from '@/components/04-EventBind.vue';
export default {
  components: {
    DataBind,
    ConditRender,
    LoopRender,
    EventBind
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
  </div>

  <!-- 구분선 -->
  <hr>
  <DataBind v-if="activeTab == 'DataBind'" />
  <ConditRender v-else-if="activeTab == 'ConditRender'" />
  <LoopRender v-else-if="activeTab == 'LoopRender'" />
  <EventBind v-else-if="activeTab == 'EventBind'" />

</template>

<style scoped>
</style>
