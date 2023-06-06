import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//import icons from '@/assets/icons.json'
import { OBJLoader } from 'three-obj-loader'

createApp(App).use(store).use(OBJLoader).use(router).mount('#app')
