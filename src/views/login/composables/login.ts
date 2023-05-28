import type { FormInst, FormRules } from 'naive-ui'
import type { UserLoginParams } from '~/apis/user'

export const useLogin = () => {
  const { t } = useI18n()
  const { message } = useGlobalConfig()
  const userStore = useUserStore()
  const router = useRouter()

  const lForm = ref<FormInst>()
  const lLoading = ref(false)
  const lModel = reactive<UserLoginParams>({
    username: null,
    password: null,
    rememberMe: false,
  })
  const lRules = reactive<FormRules>({
    username: [
      {
        required: true,
        renderMessage: () => t('login.username.required'),
      },
      {
        min: 5,
        max: 20,
        renderMessage: () => t('login.username.length'),
      },
    ],
    password: [
      {
        required: true,
        renderMessage: () => t('login.password.required'),
      },
      {
        min: 5,
        max: 20,
        renderMessage: () => t('login.password.length'),
      },
    ],
  })

  async function login() {
    lLoading.value = true

    try {
      await lForm.value?.validate()
      await userStore.login(lModel)
      lLoading.value = false
      const msgIns = message?.success(t('login.success.message'))
      const redirect = router.currentRoute.value.query.redirect as string
      await router.replace(redirect || '/')
      setTimeout(() => {
        msgIns?.destroy()
      }, 2000)
    }
    catch (err) {
      lLoading.value = false
    }
  }

  return { lForm, lLoading, lModel, lRules, login }
}
