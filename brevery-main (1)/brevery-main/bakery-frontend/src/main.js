import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap

import 'bootstrap/dist/css/bootstrap.min.css'

// KHÔNG cần dòng này nữa
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './assets/styles/main.css'

import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 2000,
  position: 'top-right',
  theme: 'colored',
  transition: 'slide',
})
app.mount('#app')