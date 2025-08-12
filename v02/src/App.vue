<script>
import DataBind from '@/components/01-DataBind.vue';
import ConditRender from '@/components/02-ConditRender.vue';
import LoopRender from '@/components/03-LoopRender.vue';
import EventBind from '@/components/04-EventBind.vue';
import Methods from '@/components/05-Methods.vue';
import Modifier from '@/components/06-Modifier.vue';
import VBind from '@/components/07-VBind.vue';
import VModel from '@/components/08-VModel.vue';
import ClassBind from '@/components/09-ClassBind.vue';
import StyleBind from '@/components/10-StyleBind.vue';
import Computed from '@/components/11-Computed.vue';
import Watch from '@/components/12-Watch.vue';
import Component from '@/components/13-Component.vue';
import LifeCycle from '@/components/14-LifeCycle.vue';
import Refs from '@/components/15-Refs.vue';
import Props from '@/components/16-Props.vue'
import Emits from '@/components/17-Emits.vue'
import Parent from '@/components/18-Parent.vue'

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
    ClassBind,
    StyleBind,
    Computed,
    Watch,
    Component,
    LifeCycle,
    Refs,
    Props,
    Emits,
    Parent,
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
    <button @click="activeTab = 'ClassBind'">클래스 바인딩</button>
    <button @click="activeTab = 'StyleBind'">스타일 바인딩</button>
    <button @click="activeTab = 'Computed'">계산된 속성</button>
    <button @click="activeTab = 'Watch'">Watcher 감시자</button>
    <button @click="activeTab = 'Component'">컴포넌트</button>
    <button @click="activeTab = 'LifeCycle'">라이프사이클과 훅</button>
    <button @click="activeTab = 'Refs'">Refs DOM 접근</button>
    <button @click="activeTab = 'Props'">Props 단방향 데이터 흐름</button>
    <button @click="activeTab = 'Emits'">Emits 이벤트 요청</button>
    <button @click="activeTab = 'Parent'">Parent</button>
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
  <ClassBind v-else-if="activeTab == 'ClassBind'" /> 
  <StyleBind v-else-if="activeTab == 'StyleBind'" /> 
  <Computed v-else-if="activeTab == 'Computed'" /> 
  <Watch v-else-if="activeTab == 'Watch'" /> 
  <Component v-else-if="activeTab == 'Component'" /> 
  <LifeCycle v-else-if="activeTab == 'LifeCycle'" /> 
  <Refs v-else-if="activeTab == 'Refs'" /> 
  <Props v-else-if="activeTab == 'Props'" /> 
  <Emits v-else-if="activeTab == 'Emits'" /> 
  <Parent v-else-if="activeTab == 'Parent'" /> 

</template>

<style scoped>
</style>
