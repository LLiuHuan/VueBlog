import {createApp} from 'vue'
import App from './App.vue'

// 全局样式
import './styles/index.scss'

// vue-router
import router from './router'

// 加载插件
import {loadAllPlugins} from './plugins'

const app = createApp(App)

app.use(router)

loadAllPlugins(app)

app.mount('#app')
