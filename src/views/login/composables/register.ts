import type { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui'
import type { UserRegisterParams } from '~/apis/user'
import { userSendCodeApi } from '~/apis/user'

export const useRegister = () => {
  const { t } = useI18n()
  const { message, dialog } = useGlobalConfig()
  const userStore = useUserStore()

  const rForm = ref<FormInst>()
  const password = ref<FormItemInst>()
  const rLoading = ref(false)
  const counter = ref(120)
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
        message: '两次密码输入不一致',
        trigger: 'input',
      },
      {
        validator: validatePasswordSame,
        message: '两次密码输入不一致',
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

  function handlePasswordInput() {
    if (rModel.confirmPassword)
      password.value?.validate({ trigger: 'password-input' })
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
    counter.value = 120

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
    }
  }

  async function register() {
    rLoading.value = true

    try {
      await rForm.value?.validate()
      const { code } = await userStore.register(rModel)
      rLoading.value = false
      if (code === 200) {
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
      else {
        rModel.code = null
      }
    }
    catch (err) {
      rLoading.value = false
    }
  }

  return {
    rForm,
    password,
    rLoading,
    counter,
    countState,
    registerState,
    rModel,
    rRules,
    handlePasswordInput,
    sendCode,
    register,
  }
}
