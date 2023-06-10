import type { UserInfo, UserLoginParams, UserRegisterParams } from '~/apis/user'
import {
  userGetInfoApi,
  userLoginApi,
  userLogoutApi,
  userRegisterApi,
} from '~/apis/user'

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

  async function register(params: UserRegisterParams) {
    await userRegisterApi(params)
  }

  async function login(params: UserLoginParams) {
    const { data } = await userLoginApi(params)

    data?.id && setToken(String(data?.id))
  }

  async function getUserInfo(params: string) {
    const { data } = await userGetInfoApi(params)

    data && setUserInfo(data)
  }

  async function logout() {
    await userLogoutApi()
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
    register,
    login,
    getUserInfo,
    logout,
  }
})
