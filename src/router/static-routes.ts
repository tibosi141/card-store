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
        meta: {
          title: 'global.header.navigation.home',
        },
        component: () => import('~/views/home/index.vue'),
      },
      {
        path: '/guide',
        name: 'Guide',
        meta: {
          title: 'global.header.navigation.guide',
        },
        component: () => import('~/views/guide/index.vue'),
      },
      {
        path: '/about',
        name: 'About',
        meta: {
          title: 'global.header.navigation.about',
        },
        component: () => import('~/views/about/index.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        meta: {
          title: 'global.header.navigation.profile',
        },
        component: () => import('~/views/profile/index.vue'),
      },
      {
        path: '/product',
        name: 'Product',
        meta: {
          title: 'global.header.navigation.product',
        },
        component: () => import('~/views/product/index.vue'),
      },
    ],
  },
]

export default staticRoutes
