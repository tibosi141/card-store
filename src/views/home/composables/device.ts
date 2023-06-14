import { deviceGetListApi } from '~/apis/home'
import type { DeviceInfo } from '~/apis/home'

export const useDevice = () => {
  const loading = ref(false)
  const deviceList = ref<DeviceInfo[]>()

  async function getDeviceList() {
    loading.value = true

    try {
      const { data } = await deviceGetListApi()
      loading.value = false
      if (data) deviceList.value = data
    }
    catch (err) {
      loading.value = false
    }
  }

  return {
    loading,
    deviceList,
    getDeviceList,
  }
}
