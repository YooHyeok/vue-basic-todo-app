<script>
import SlotFancyBtn from '@/components/20-SlotFancyBtn.vue'
import SlotMainLayout from '@/components/20-SlotMainLayout.vue'
import SlotChildProp from '@/components/20-SlotChildProp.vue'
export default {
  components: {
    SlotFancyBtn,
    SlotMainLayout,
    SlotChildProp,
  },
  data() {
    return {
      buttonname: '부모부모'
    }
  }
}
</script>
<!-- 
[slot]
영어사전에서는 자리, 넣다, 홈(오목하고 길게 파인 자리)라는 뜻으로 정리되어 있다.  
사용 이유
1. 컴포넌트의 재사용성 증가  
  동일한 컴포넌트를 다양한 상황에서 사용하면서도, 그 안에 들어가는 콘텐츠를 부모 컴포넌트에서 쉽게 바꿀 수 있다.  
  예를 들어 버튼 컴포넌트 안에 텍스트, 아이콘, 심지어는 복잡한 HTML 구조를 넣을 수도 있다.  
2. 유연한 레이아웃 구성  
  슬롯을 사용하면 부모 컴포넌트가 자식 컴포넌트의 특정 위치에 내용을 삽입할 수 있어  
  보다 유연한 레이아웃 구성이 가능하여 이를 통해 복잡한 UI를 구성할 때 유용하다.  
3. 명확한 컴포넌트 구조  
  부모 컴포넌트는 자식 컴포넌트의 정의된 영역에 명시적으로 컨텐츠를 삽입할 수 있어서 코드의 가독성과 유지보수성이 향상된다는 장점이 있다.  
  
```
<FancyButton>클릭하기!</FancyButton>
```
```
<button class="fancy-btn">
  <slot></slot>
</button>
```

위와 같이 텍스트노드가 컴포넌트 사이에 있을 때, 해당 텍스트노드가 FancyButton내 자식 컴포넌트의 slot위치에 들어가게 된다.  
(기본적으로 컴포넌트는 셀프클로징 태그 형태이지만, 여닫는 태그 형태인 pair태그로 구성할경우 사이에 노드를 적용할 경우 해당 노드를 자식 영역의 slot에 주입할 수 있게 된다.)
-->
<template>
  <hr/>
  <a target="_blank" href="https://github.com/YooHyeok/vue-basic-todo-app/blob/main/v02/src/components/20-Slot.vue" style="text-decoration: none; color: blue;">
    <h1 style="cursor: pointer;">코드 보러 가기</h1>
  </a>
  <hr/>
  <h1>Slot</h1>
  <hr/>
  <div class="container">
    <!-- 좌측 영역 -->
    <div class="left">
      <SlotFancyBtn>
        <strong>pair 태그 삽입(SLOT)</strong>
      </SlotFancyBtn>
      <br/>
      <br/>
      <SlotFancyBtn buttonName="<strong>PROPS 전달(v-html)</strong>"></SlotFancyBtn>
      <br/>
      <br/>
      <SlotFancyBtn/> <!-- 아무런 노드도 작성하지 않을 경우 자식컴포넌트의 slot사이에 선언한 디폴트를 출력 -->
      <br/>
      <hr/>
      <h1>다중 슬롯과 template</h1>
      <SlotMainLayout>
        <!-- 3개의 slot에 전달해야 하므로 template 태그를 활용하여 전달한다. -->
        <template v-slot:header><!-- v-slot 디렉티브에 SlotMainLayout의 slot에 부여한 name을 할당한다. (v-slot:{name}) -->
          <h2>Header</h2>
        </template>
        <template #contents><!-- v-slot의 축약형으로 #키워드를 사용할 수 있다. (#{name}) -->
          <h2>contents</h2>
        </template>
        <template #default><!-- 자식컴포넌트의 slot에 name을 부여하지 않은 경우 default로 접근한다. -->
          <h2>footer</h2>
        </template>
      </SlotMainLayout>
    </div>
    <!-- 중앙 선 -->
    <div class="divider"></div>
     <!-- 우측 영역 -->
    <div class="right">
      <SlotChildProp>
        {{ buttonname }}
      </SlotChildProp>
      <br/>
      <SlotChildProp v-slot="props"> <!-- 자식 props를 전달 받을 수 있다. -->
        {{ props.child }}
      </SlotChildProp>
      <br/>
      <SlotChildProp v-slot="{child}"> <!-- 자식 props 구조분해 가능 -->
        구조분해: {{ child }}
      </SlotChildProp>
    </div>
  </div>
</template>
<style scoped>
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