import type { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui'
import type { UserForgetPassParams } from '~/api/user'
import { userForgetPasswordApi, userSendCodeApi } from '~/api/user'

export const useForgetPassword = () => {
  const { t } = useI18n()
  const { message } = useGlobalConfig()

  const show = ref(false)
  const disabled = ref(true)
  const fPassword = ref<FormItemInst>()
  const fForm = ref<FormInst>()
  const fLoading = ref(false)
  const fCounter = ref(60)
  const countState = ref(false)
  const resetState = ref(false)
  const fModel = reactive<UserForgetPassParams>({
    email: null,
    code: null,
    password: null,
    confirmPassword: null,
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
    code: [
      {
        required: true,
        renderMessage: () => t('register.verification-code.required'),
      },
      {
        min: 6,
        max: 6,
        renderMessage: () => t('register.verification-code.rule'),
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
    confirmPassword: [
      {
        required: true,
        renderMessage: () => t('login.password.required'),
      },
      {
        validator: validatePasswordStartWith,
        renderMessage: () => t('register.confirm.password.rule'),
        trigger: 'input',
      },
      {
        validator: validatePasswordSame,
        renderMessage: () => t('register.confirm.password.rule'),
        trigger: ['blur', 'password-input'],
      },
    ],
  })

  function handleFPasswordInput() {
    if (fModel.confirmPassword)
      fPassword.value?.validate({ trigger: 'password-input' })
  }

  function validatePasswordStartWith(_: FormItemRule, value: string): boolean {
    return (
      !!fModel.password
      && fModel.password.startsWith(value)
      && fModel.password.length >= value.length
    )
  }

  function validatePasswordSame(_: FormItemRule, value: string): boolean {
    return value === fModel.password
  }

  function toggleSwitch(val: boolean) {
    fModel.email = null
    show.value = val
  }

  function startCount() {
    fCounter.value = 60

    const timer = setInterval(() => {
      if (fCounter.value <= 0) {
        clearInterval(timer)
        countState.value = false
        return
      }
      fCounter.value--
    }, 1000)
  }

  async function fSendCode() {
    const msgIns = message?.success(t('register.verification-code.loading'))

    try {
      await fForm.value?.validate(undefined, rule => rule.key === 'email')
      await userSendCodeApi({ email: fModel.email })
      countState.value = true
      msgIns?.destroy()
      message?.success(t('register.verification-code.success'))
      startCount()
    }
    catch (err) {
      msgIns?.destroy()
      switch (typeof err) {
        case 'boolean':
          message?.error(t('register.verification-code.error1'))
          break
        case 'object':
          message?.error(t('register.verification-code.error2'))
          break
        default:
          message?.error((err as any).error)
          break
      }
    }
  }

  async function sendEmail() {
    fLoading.value = true

    try {
      await fForm.value?.validate()
      await userForgetPasswordApi(fModel)
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
    disabled,
    fForm,
    fLoading,
    fCounter,
    fModel,
    fRules,
    fPassword,
    resetState,
    handleFPasswordInput,
    toggleSwitch,
    sendEmail,
    fSendCode,
  }
}
