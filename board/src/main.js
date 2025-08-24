import { createApp } from 'vue'
import App from './App.vue'

import {createBootstrap} from 'bootstrap-vue-next/plugins/createBootstrap'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

createApp(App)
.use(createBootstrap())
.mount('#app')
