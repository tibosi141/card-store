import { createRouter, createWebHashHistory } from 'vue-router'
import staticRoutes from './static-routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_APP_BASE ?? '/'),
  routes: [
    ...staticRoutes,
    {
      path: '/login',
      name: 'Login',
      component: () => import('~/views/login/index.vue'),
    },
    {
      path: '/error',
      name: 'Error',
      component: () => import('~/views/error/index.vue'),
    },
  ],
})

export default router
