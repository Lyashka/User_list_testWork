import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Paginate from 'vuejs-paginate-next'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Paginate)

app.mount('#app')
