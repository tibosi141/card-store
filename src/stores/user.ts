import type { UserInfo, UserLoginParams } from '~/apis/user'
import { userGetInfoApi, userLoginApi } from '~/apis/user'
import i18n from '~/locale'
import router from '~/router'

export const useUserStore = defineStore('user', () => {
  const { t } = i18n.global
  const { message } = useGlobalConfig()
  const token = useAuthorization()
  const userInfo = ref<UserInfo>()

  function setToken(val: string | null) {
    token.value = val
  }

  function setUserInfo(info: UserInfo | undefined) {
    userInfo.value = info
  }

  async function login(params: UserLoginParams) {
    const { data } = await userLoginApi(params)

    data?.token && setToken(data?.token)
  }

  async function getUserInfo() {
    const { data } = await userGetInfoApi()

    data && setUserInfo(data)
  }

  async function logout() {
    setToken(null)
    setUserInfo(undefined)
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
    userInfo,
    setToken,
    setUserInfo,
    login,
    logout,
    getUserInfo,
  }
})
