import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './locale'
import '@unocss/reset/tailwind.css'
import './assets/styles/index.css'
import 'uno.css'
import './utils/auto-rem'
import './utils/unocss-icon'
import './router/router-guard'

const pinia = createPinia()

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)

app.mount('#app')
