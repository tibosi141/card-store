import type { FormInst, FormRules } from 'naive-ui'
import type { UserSendCodeParams } from '~/apis/user'
import { userForgetPasswordApi } from '~/apis/user'

export const useForgetPassword = () => {
  const { t } = useI18n()
  const { message } = useGlobalConfig()

  const show = ref(false)
  const fForm = ref<FormInst>()
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
    try {
      await fForm.value?.validate()
      await userForgetPasswordApi(fModel)
      message?.success('发送成功')
      // toggleSwitch(false)
    }
    catch (err) {
      // toggleSwitch(false)
    }
  }

  return {
    show,
    fForm,
    fModel,
    fRules,
    toggleSwitch,
    sendEmail,
  }
}
