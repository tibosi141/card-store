import type { RouteRecordRaw } from 'vue-router'

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('~/views/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('~/views/AboutView.vue'),
  },
]

export default staticRoutes
