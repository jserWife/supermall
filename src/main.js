// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
})


// import {requerst} from './network/request'

// requerst({
//   url:'/home/multidata'
// })
// .then(res=>{
//   console.log(res.data);
// })
// .catch(err=>{
//   console.log(err);
// })