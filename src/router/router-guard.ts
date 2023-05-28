import { AxiosError } from 'axios'
import router from './index'
import i18n from '~/locale'

export const allowedRoutes = ['/', '/guide', '/about', '/error']
export const dynamicRoutes = ['/profile']
export const loginRoute = '/login'
export const hasLoginAllowRoutes = [...allowedRoutes, loginRoute]
export const hasDynamicAllowRoutes = [...allowedRoutes, ...dynamicRoutes]

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
    if (!userStore.userInfo && to.path !== 'login') {
      try {
        await userStore.getUserInfo()

        // if (to.path === loginRoute) {
        //   next('/')
        //   return
        // }
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
