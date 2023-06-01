import type { FormInst, FormRules } from 'naive-ui'
import type { UserSendCodeParams } from '~/apis/user'
import { userForgetPasswordApi } from '~/apis/user'

export const useForgetPassword = () => {
  const { t } = useI18n()
  const { message } = useGlobalConfig()

  const show = ref(false)
  const fForm = ref<FormInst>()
  const fLoading = ref(false)
  const fModel = reactive<UserSendCodeParams>({
    email: null,
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
  })

  function toggleSwitch(val: boolean) {
    fModel.email = null
    show.value = val
  }

  async function sendEmail() {
    fLoading.value = true

    try {
      await fForm.value?.validate()
      const flag = await userForgetPasswordApi(fModel)
      fLoading.value = false
      if (flag) {
        toggleSwitch(false)
        message?.success(t('login.reset-password.success'))
      }
      else {
        message?.error(t('login.reset-password.notfound'))
      }
    }
    catch (err) {
      fLoading.value = false
      message?.error(t('login.reset-password.fail'))
    }
  }

  return {
    show,
    fForm,
    fLoading,
    fModel,
    fRules,
    toggleSwitch,
    sendEmail,
  }
}
