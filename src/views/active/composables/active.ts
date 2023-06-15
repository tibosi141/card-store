import type { FormInst, FormRules } from 'naive-ui'
import type { CardActivateParams } from '~/api/active'
import { cardActivateApi } from '~/api/active'

export const useActive = () => {
  const { t } = useI18n()
  const userStore = useUserStore()
  const { dialog } = useGlobalConfig()
  const router = useRouter()

  const loading = ref(false)
  const formRef = ref<FormInst | null>(null)
  const formModel = reactive<CardActivateParams>({
    code: '',
    userId: userStore.userInfo?.id as number,
  })
  const rules = reactive<FormRules>({
    code: {
      required: true,
      renderMessage: () => t('active.code.required'),
    },
  })

  async function handleActive(e: MouseEvent) {
    loading.value = true
    e.preventDefault()
    try {
      await formRef.value?.validate()
      await cardActivateApi(formModel)
      dialog?.success({
        title: t('global.dialog.title.success'),
        content: t('active.activate.success.content'),
        positiveText: t('global.dialog.btn.confirm'),
        negativeText: t('global.dialog.btn.cancle'),
        onPositiveClick: () => {
          router
            .push('/profile')
            .then(() => {})
            .catch(() => {})
        },
      })
    }
    finally {
      formModel.code = ''
      loading.value = false
    }
  }

  return {
    loading,
    formRef,
    formModel,
    rules,
    handleActive,
  }
}
