import 'font-awesome/css/font-awesome.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './config/store.js'
import VueGravatar from 'vue3-gravatar'
import router from './config/router'
import Toaster from '@meforma/vue-toaster'
import './config/axios'

createApp(App).use(store).use(router).use(VueGravatar).use(Toaster).mount('#app')

