// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import {
  Popup,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Lazyload,
  CellSwipe,
  DatetimePicker,
  Picker
} from 'mint-ui'
import InterServer from './http/server'
import Vuex from 'vuex'
import VuexConfig from './config/vuex'
import Global from './config/global'
import 'amfe-flexible'
import title from './config/directive'

// 数据模拟
require('./mock')

// 服务器请求路径设置
Vue.prototype.$HTTP = InterServer
// 状态管理设置
const store = VuexConfig
// 设置全局变量和方法
Vue.prototype.$GLOBAL = Global
Vue.config.productionTip = false

// 注册组件
// Vue.use(MintUI)
Vue.component(Popup.name, Popup);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Picker.name, Picker);
Vue.use(Lazyload);

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
