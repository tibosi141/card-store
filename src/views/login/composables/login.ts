import type { FormInst, FormRules } from 'naive-ui'
import type { UserLoginParams } from '~/apis/user'

export const useLogin = () => {
  const { t } = useI18n()
  const router = useRouter()

  const lForm = ref<FormInst>()
  const lLoading = ref(false)

  const lModel = reactive<UserLoginParams>({
    username: null,
    password: null,
    rememberMe: false,
  })

  const lRules = ref<FormRules>({
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

  const login = async () => {
    lLoading.value = true

    try {
      await lForm.value?.validate()
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('通过')
        }, 2000)
      })
      lLoading.value = false
      const redirect = router.currentRoute.value.params.redirect as string
      await router.replace(redirect || '/')
    }
    catch (err) {
      lLoading.value = false
    }
  }

  return { lForm, lLoading, lModel, lRules, login }
}
