import { AxiosError } from 'axios'
import router from './index'
import i18n from '~/locale'

export const loginRoute = '/login'
export const staticRoutes = ['/', '/guide', '/about', '/profile', '/product', '/active']
export const allowedRoutes = ['/error', '/404', '/403', '/500', '/401']
export const hasLoginAllowRoutes = [
  loginRoute,
  ...staticRoutes,
  ...allowedRoutes,
]

router.beforeEach(async (to, _, next) => {
  const token = useAuthorization()
  const userStore = useUserStore()
  const { loadingBar } = useGlobalConfig()
  loadingBar?.start()

  if (!token.value) {
    if (!hasLoginAllowRoutes.includes(to.path)) {
      next({
        path: loginRoute,
        query: {
          redirect: to.path,
        },
      })

      return
    }
  }
  else {
    if (!userStore.userInfo && !allowedRoutes.includes(to.path)) {
      try {
        await userStore.getUserInfo(token.value)

        if (to.path === loginRoute) {
          next('/')
          return
        }
      }
      catch (err) {
        if (err instanceof AxiosError && err.response?.status === 401) {
          return
        }
        else {
          next({
            path: 'error',
            query: {
              redirect: to.path,
            },
          })

          return
        }
      }
    }
  }

  next()
})

router.afterEach((to) => {
  const { loadingBar } = useGlobalConfig()
  loadingBar?.finish()
  const appStore = useAppStore()
  const appTitle = i18n.global.t(appStore.headerConfig.title)
  const title = to.meta.title
  if (title) {
    const localeTitle = i18n.global.t(title)
    document.title = `${localeTitle} - ${appTitle}`
  }
  else {
    document.title = appTitle
  }
})
