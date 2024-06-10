import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/routes'
import { MotionPlugin } from '@vueuse/motion'

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
