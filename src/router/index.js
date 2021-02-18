// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
const Cart = () => import('../views/cart/cart.vue');
const Category = () => import('../views/category/category.vue');
const Home = () => import('../views/home/home.vue');
const Mine = () => import('../views/mine/mine.vue');
const Paging = () => import('../views/home/paging/Paging.vue');
// 通过vue.use(插件),安装插件
Vue.use(Router)
// 将router对象传入vue实例
export default new Router({
  // 配置映射关系
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/paging',
      component: Paging
    }
  ]
})
