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
      component: () => import('@/views/Home'),
      children: [
        {
          path: '/',
          redirect: 'goods'
        },
        {
          path: 'goods',
          name: '商品管理',
          component: () => import('@/views/goods/Goods')
        },
        {
          path: 'column',
          name: '栏目管理',
          component: () => import('@/views/column/Column')
        },
        {
          path: 'users',
          name: '用户管理',
          component: () => import('@/views/users/Users')
        },
        {
          path: 'manage',
          name: '系统配置',
          component: () => import('@/views/manage/Manage')
        }
      ]
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
