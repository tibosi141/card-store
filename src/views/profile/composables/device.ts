import type { TagProps } from 'naive-ui'
import type { DeviceInfo } from '~/apis/profile'
import { cardGetListApi, deviceGetListApi } from '~/apis/profile'

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
      const [{ data: device }, { data: card }] = await Promise.all([
        deviceGetListApi(),
        cardGetListApi(),
      ])
      dLoading.value = false
      if (device) deviceInfo.value = device[1]
      if (deviceInfo.value && card) {
        deviceInfo.value.endTime = card.find(
          item => String(item.userId) === token.value,
        )?.endTime
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
