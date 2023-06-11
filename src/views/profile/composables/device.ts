import type { DeviceInfo } from '~/apis/profile'
import { deviceGetListApi } from '~/apis/profile'

export const useDevice = () => {
  const dLoading = ref(false)
  const deviceList = ref<DeviceInfo[]>()

  async function getDeviceList() {
    dLoading.value = true

    try {
      const { page } = await deviceGetListApi()
      dLoading.value = false
      if (page) deviceList.value = page.list
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
