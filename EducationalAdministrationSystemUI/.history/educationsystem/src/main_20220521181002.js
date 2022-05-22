
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MainInfo from './components/App.vue'
import MainInfo from './components/MainInfo.vue'
import './assets/css/global.css'//引入全局样式表
import Router from './router/index'


var app=createApp(MainInfo);
app.use(ElementPlus);
app.use(Router);
app.mount('#app')

