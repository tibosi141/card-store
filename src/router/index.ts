import { createRouter, createWebHistory } from 'vue-router'
import staticRoutes from './staticRoutes'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE ?? '/'),
  routes: [...staticRoutes],
})

export default router
