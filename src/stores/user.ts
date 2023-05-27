import type { UserLoginParams } from '~/apis/user'
import { userLoginApi } from '~/apis/user'
import i18n from '~/locale'

export const useUserStore = defineStore('user', () => {
  const token = useAuthorization()
  const { message } = useGlobalConfig()
  const { t } = i18n.global
  const router = useRouter()

  function setToken(value: string | null) {
    token.value = value
  }

  async function login(params: UserLoginParams) {
    const { data } = await userLoginApi(params)

    data?.token && setToken(data?.token)
  }

  async function logout() {
    setToken(null)
    message?.success(t('global.user.logout.success'))
    await router.replace({
      path: '/login',
      query: {
        redirect: router.currentRoute.value.path,
      },
    })
  }

  return {
    token,
    login,
    logout,
  }
})
