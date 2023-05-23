import type { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui'
import type { UserRegisterParams } from '~/apis/user'

export type TabName = 'login' | 'register'

export const useRegister = () => {
  const { t } = useI18n()
  const message = useMessage()
  const dialog = useDialog()

  const tabName = ref<TabName>('login')
  const onSwitchTab = (val: TabName) => {
    tabName.value = val
  }
  const rForm = ref<FormInst>()
  const password = ref<FormItemInst>()
  const rLoading = ref(false)
  const counter = ref(120)
  const countState = ref(false)
  const registerState = ref(false)

  const rModel = reactive<UserRegisterParams>({
    username: null,
    password: null,
    confirmPassword: null,
    email: null,
    code: null,
  })

  const validatePasswordStartWith = (
    _: FormItemRule,
    value: string,
  ): boolean => {
    return (
      !!rModel.password
      && rModel.password.startsWith(value)
      && rModel.password.length >= value.length
    )
  }
  const validatePasswordSame = (_: FormItemRule, value: string): boolean => {
    return value === rModel.password
  }

  const handlePasswordInput = () => {
    if (rModel.confirmPassword)
      password.value?.validate({ trigger: 'password-input' })
  }

  const rRules = ref<FormRules>({
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

  const startCount = () => {
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

  const sendCode = async () => {
    const msgIns = message.success(t('register.verification-code.loading'))
    try {
      await rForm.value?.validate(undefined, rule => rule.key === 'email')
      countState.value = true
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('发送成功')
        }, 1000)
      })
      msgIns.destroy()
      startCount()
      message.success(t('register.verification-code.success'))
    }
    catch (err) {
      msgIns.destroy()
    }
  }

  const register = async () => {
    rLoading.value = true

    try {
      await rForm.value?.validate()
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve('通过')
        }, 2000)
      })
      rLoading.value = false
      registerState.value = true
      dialog.success({
        title: () => t('register.success'),
        content: () => t('register.success.tips'),
        positiveText: '确定',
        onClose: () => {
          onSwitchTab('login')
        },
        onPositiveClick: () => {
          onSwitchTab('login')
        },
      })
    }
    catch (err) {
      rLoading.value = false
    }
  }

  return {
    tabName,
    rForm,
    password,
    rLoading,
    counter,
    countState,
    registerState,
    rModel,
    rRules,
    onSwitchTab,
    handlePasswordInput,
    sendCode,
    register,
  }
}
