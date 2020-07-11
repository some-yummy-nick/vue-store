import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Auth/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Auth/Register.vue'),
  },
  {
    path: '/product/:id',
    props: true,
    name: 'Product',
    component: () => import('../views/Products/Product.vue'),
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/Products/ProductList.vue'),
  },
  {
    path: '/new',
    name: 'New',
    component: () => import('../views/Products/NewProduct.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/User/Checkout.vue'),
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
