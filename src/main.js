import './assets/main.css'
import '@/common/init'
import { Lazyload } from 'vant'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(Lazyload)
app.use(router)

app.mount('#app')
