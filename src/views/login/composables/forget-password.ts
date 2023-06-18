import type { FormInst, FormRules } from 'naive-ui'
import type { UserResetPassParams } from '~/api/user'
import { userResetPasswordApi } from '~/api/user'

export const useForgetPassword = () => {
  const { t } = useI18n()
  const { message } = useGlobalConfig()

  const show = ref(false)
  const fForm = ref<FormInst>()
  const fLoading = ref(false)
  const resetState = ref(false)
  const fModel = reactive<UserResetPassParams>({
    email: null,
    password: null,
  })
  const fRules = reactive<FormRules>({
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

  function toggleSwitch(val: boolean) {
    fModel.email = null
    fModel.password = null
    show.value = val
  }

  async function sendEmail() {
    fLoading.value = true

    try {
      await fForm.value?.validate()
      await userResetPasswordApi(fModel)
      fLoading.value = false
      resetState.value = true
      toggleSwitch(false)
      message?.success(t('login.reset-password.success'))
    }
    catch (err) {
      fLoading.value = false
      message?.error(t('login.reset-password.fail'))
    }
  }

  return {
    show,
    // disabled,
    fForm,
    fLoading,
    // fCounter,
    fModel,
    fRules,
    // fPassword,
    resetState,
    // handleFPasswordInput,
    toggleSwitch,
    sendEmail,
    // fSendCode,
  }
}
