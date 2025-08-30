import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router' // 모듈 해석 규칙 때문에 디렉토리 import 시 index.js 를 자동으로 인식 - 자바스크립트(특히 Node.js 모듈 시스템과 Webpack, Vite 같은 번들러)에는 index.js 를 진입점(entry file) 으로 인식하는 규칙

createApp(App).use(router).mount('#app')
