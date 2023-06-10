import type { DeviceGetListParams, DeviceInfo } from '~/apis/profile'
import { deviceGetListApi } from '~/apis/profile'

export const useDevice = () => {
  const dLoading = ref(false)
  const deviceList = ref<DeviceInfo[]>()

  async function getDeviceList(params?: DeviceGetListParams) {
    dLoading.value = true

    try {
      const { data } = await deviceGetListApi(params)
      dLoading.value = false
      if (data) deviceList.value = data
    }
    catch (err) {
      dLoading.value = false
    }
  }

  return {
    dLoading,
    deviceList,
    getDeviceList,
  }
}
