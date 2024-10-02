import './assets/main.css'
import props from './Props.json'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App,props)

app.use(createPinia())

app.mount('#app')
