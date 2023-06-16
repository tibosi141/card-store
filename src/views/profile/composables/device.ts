import type { TagProps } from 'naive-ui'
import type { DeviceInfo } from '~/api/profile'
import { deviceGetListApi } from '~/api/profile'

export const useDevice = () => {
  const { t } = useI18n()
  const userStore = useUserStore()
  const dLoading = ref(false)
  const deviceInfo = ref<DeviceInfo>()
  const tagType = computed<TagProps['type']>(() => {
    if (deviceInfo.value?.type === '普通') return 'success'
    else if (deviceInfo.value?.type === '高级') return 'info'
    else if (deviceInfo.value?.type === '超级') return 'error'
    else return 'default'
  })

  const vipInfo = computed(() => {
    if (deviceInfo.value?.type === '普通') return t('product.regular.label')
    else if (deviceInfo.value?.type === '高级') return t('product.higher.label')
    else if (deviceInfo.value?.type === '超级') return t('product.super.label')
    else return t('product.empty.label')
  })

  async function getDeviceList() {
    dLoading.value = true

    try {
      const { data } = await deviceGetListApi()
      dLoading.value = false
      if (data) {
        deviceInfo.value = data.find(
          item => item.userId === userStore.userInfo?.id,
        )
      }
    }
    catch (err) {
      dLoading.value = false
    }
  }

  return {
    dLoading,
    deviceInfo,
    tagType,
    vipInfo,
    getDeviceList,
  }
}
