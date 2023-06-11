import type { FormInst, FormRules } from 'naive-ui'
import type { CardActivateParams } from '~/apis/active'
import { cardActivateApi } from '~/apis/active'

export const useActive = () => {
  const { t } = useI18n()
  const userStore = useUserStore()
  const { message } = useGlobalConfig()
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
      message?.success(t('active.code.success'))
      await router.push('/profile')
    }
    catch (error) {
      console.log(error)
      formModel.code = ''
    }
    finally {
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
