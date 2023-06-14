import { deviceGetListApi } from '~/apis/home'
import type { DeviceInfo } from '~/apis/profile'

export const useDevice = () => {
  const loading = ref(false)
  const deviceList = ref<DeviceInfo[]>()

  async function getDeviceList() {
    loading.value = true

    try {
      const { page } = await deviceGetListApi()
      loading.value = false
      if (page) deviceList.value = page.list
    }
    catch (err) {
      loading.value = false
    }
  }

  return {
    deviceList,
    getDeviceList,
  }
}
