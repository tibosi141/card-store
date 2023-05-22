import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '~/layout'

// @unocss-include
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
          icon: [
            'i-flagpack-cn',
            'i-flagpack-us',
            'i-flagpack-jp',
            'i-flagpack-kr',
          ],
        },
        component: () => import('~/views/index.vue'),
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
    ],
  },
]

export default staticRoutes
