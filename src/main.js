// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入store
import store from './store/store'

//引入阿里图标
import '@/assets/font/iconfont.css'

import 'babel-polyfill'


//使用富文本插件
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

//封装axios的get和post方法
import Server from './server/index.js'
Vue.prototype.$get = Server.get;
Vue.prototype.$post = Server.post;
Vue.prototype.$delete = Server.deleted;

Vue.config.productionTip = false

// router.beforeEach((to,from,next) => {
//   if(to.path === "/"){
//     next()
//   }else{
//     if(JSON.parse(sessionStorage.getItem("id"))){
//       next()
//     }
//     else{
//       next({
//         path: "/"
//       })
//     }
//   }
//   if(to.path == '/brokerList'){
//     alert(4)
//     // next({path: '/'})
//     return false;
//   }
//   if(to.path === '/' || localStorage.getItem('userInfo')){
//     alert(3)
//      next();
//   }else{
//     alert(2)
//     next({path: '/'});
//   }
//   if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//     if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//         next();
//     }
//     else {
//         next({
//             path: '/login',
//             query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//         })
//     }
//   }else {
//     next();
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
