import { createApp } from 'vue'
import './style.css'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import App from './App.vue'

createApp(App).use(mdiVue, {icons: mdijs}).mount('#app')
