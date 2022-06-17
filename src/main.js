import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//font awesome icon
import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
//config bootstrap
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
//main css file
import "./style.css"

createApp(App).use(store).use(router).mount('#app')
