import type { TagProps } from 'naive-ui'
import type { DeviceInfo } from '~/api/profile'
import { deviceGetListApi } from '~/api/profile'

export const useDevice = () => {
  const token = useAuthorization()
  const dLoading = ref(false)
  const deviceInfo = ref<DeviceInfo>()
  const tagType = computed<TagProps['type']>(() => {
    if (deviceInfo.value?.type === '普通') return 'success'
    else if (deviceInfo.value?.type === '高级') return 'info'
    else if (deviceInfo.value?.type === '超级') return 'error'
    else return 'default'
  })

  async function getDeviceList() {
    dLoading.value = true

    try {
      const { data } = await deviceGetListApi()
      dLoading.value = false
      if (data) {
        deviceInfo.value = data.find(
          item => String(item.userId) === token.value,
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
    getDeviceList,
  }
}
