import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '~/layout'

const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('~/views/home/index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('~/views/about/index.vue'),
      },
      {
        path: '/guide',
        name: 'Guide',
        component: () => import('~/views/guide/index.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('~/views/profile/index.vue'),
      },
    ],
  },
]

export default staticRoutes
