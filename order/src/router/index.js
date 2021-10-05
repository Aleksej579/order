import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Orders.vue'

const routes = [
  {
    path: '/',
    name: 'Orders',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Products.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
