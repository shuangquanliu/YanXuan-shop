import Vue from 'vue'
import App from './App.vue'

//全局使用路由
import router from './router'
//全局使用store
import store from './store/store.js'
//引入mock 数据服务器
import './mockData/mockerver.js'

//组件对象可以看到vm实例对象方法:组件对象的原型对象时vm的实例


new Vue({
  el:'#app',
 /*  components:{
    App
  },
  template:'<App/>', */
  render: h => h(App), 
  router,
  store
})
