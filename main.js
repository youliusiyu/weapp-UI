import Vue from 'vue'
import App from './App'
import Vant from 'vant'
import formCreate from '@form-create/element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(formCreate)
Vue.use(ElementUI);
Vue.use(Vant)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
