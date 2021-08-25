import VueRouter from 'vue-router'
import Vue from 'vue'
import { getToken } from '@/utils/tool'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: () => import('@/views/Home')
    },
    {
      path: '/workspace',
      name: '工作台',
      component: () => import('@/views/Workspace')
    },
    {
      path: '/login',
      name: '用户登录',
      component: () => import('@/views/Login')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (token) {
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      return next({ 'path': '/login' })
    }
  }
})

export default router
