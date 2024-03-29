import type { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui'
import type { UserRegisterParams } from '~/api/user'
import { userSendCodeApi } from '~/api/user'

export const useRegister = () => {
  const { t } = useI18n()
  const { message, dialog } = useGlobalConfig()
  const userStore = useUserStore()

  const rForm = ref<FormInst>()
  const rPassword = ref<FormItemInst>()
  const rLoading = ref(false)
  const counter = ref(60)
  const countState = ref(false)
  const registerState = ref(false)
  const rModel = reactive<UserRegisterParams>({
    userName: null,
    password: null,
    confirmPassword: null,
    email: null,
    code: null,
  })
  const rRules = reactive<FormRules>({
    userName: [
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
    email: [
      {
        key: 'email',
        required: true,
        renderMessage: () => t('register.email.required'),
      },
      {
        key: 'email',
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
  })

  function handleRPasswordInput() {
    if (rModel.confirmPassword)
      rPassword.value?.validate({ trigger: 'password-input' })
  }

  function validatePasswordStartWith(_: FormItemRule, value: string): boolean {
    return (
      !!rModel.password
      && rModel.password.startsWith(value)
      && rModel.password.length >= value.length
    )
  }

  function validatePasswordSame(_: FormItemRule, value: string): boolean {
    return value === rModel.password
  }

  function startCount() {
    counter.value = 60

    const timer = setInterval(() => {
      if (counter.value <= 0) {
        clearInterval(timer)
        countState.value = false
        return
      }
      counter.value--
    }, 1000)
  }

  async function sendCode() {
    const msgIns = message?.success(t('register.verification-code.loading'))

    try {
      await rForm.value?.validate(undefined, rule => rule.key === 'email')
      await userSendCodeApi({ email: rModel.email })
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

  async function register() {
    rLoading.value = true

    try {
      await rForm.value?.validate()
      await userStore.register(rModel)
      rLoading.value = false
      dialog?.success({
        title: t('register.success.title'),
        content: t('register.success.content'),
        positiveText: t('global.dialog.btn.confirm'),
        onMaskClick: () => {
          registerState.value = true
        },
        onClose: () => {
          registerState.value = true
        },
        onPositiveClick: () => {
          registerState.value = true
        },
      })
    }
    catch (err) {
      rModel.code = null
      rLoading.value = false
    }
  }

  return {
    rForm,
    rPassword,
    rLoading,
    counter,
    countState,
    registerState,
    rModel,
    rRules,
    handleRPasswordInput,
    sendCode,
    register,
  }
}
