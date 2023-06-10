import type { FormInst, FormRules } from 'naive-ui'
import type { UserLoginParams } from '~/apis/user'

export const useLogin = () => {
  const { t } = useI18n()
  const userStore = useUserStore()
  const router = useRouter()

  const lForm = ref<FormInst>()
  const lLoading = ref(false)
  const lModel = reactive<UserLoginParams>({
    email: null,
    password: null,
    rememberMe: false,
  })
  const lRules = reactive<FormRules>({
    email: [
      {
        required: true,
        renderMessage: () => t('register.email.required'),
      },
      {
        pattern: /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/,
        renderMessage: () => t('register.email.rule'),
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
      const redirect = router.currentRoute.value.query.redirect as string
      await router.replace(redirect || '/')
    }
    catch (err) {
      lModel.password = null
      lLoading.value = false
    }
  }

  return {
    lForm,
    lLoading,
    lModel,
    lRules,
    login,
  }
}
