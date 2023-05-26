import Vue from 'vue'
import VueRouter from 'vue-router'
import AppMainPage from '@/pages/MainPage.vue'
import AppNotFoundPage from '@/pages/NotFoundPage.vue'
import AppProductPage from '@/pages/ProductPage.vue'
import AppCartPage from '@/pages/CartPage.vue'
import AppOrderPage from '@/pages/OrderPage.vue'
import AppOrderInfoPage from '@/pages/OrderInfoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: AppMainPage,
  },
  {
    path: '/product/:id',
    name: 'product',
    component: AppProductPage,
  },
  {
    path: '/cart',
    name: 'cart',
    component: AppCartPage,
  },
  {
    path: '/order',
    name: 'order',
    component: AppOrderPage,
  },
  {
    path: '/order/:id',
    name: 'orderInfo',
    component: AppOrderInfoPage,
  },
  {
    path: '*',
    name: 'notFound',
    component: AppNotFoundPage,
  },
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes,
})

export default router
