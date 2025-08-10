import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from '@/components/13-GlobalComponent.vue'

const app = createApp(App)
app.component('GlobalComponent', GlobalComponent)
app.mount('#app')
