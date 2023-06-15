import { deviceGetListApi } from '~/api/profile'
import type { DeviceInfo } from '~/api/profile'

export const useDevice = () => {
  const loading = ref(false)
  const deviceList = ref<DeviceInfo[]>()

  async function getDeviceList() {
    loading.value = true

    try {
      const { data } = await deviceGetListApi()
      if (data) deviceList.value = data
    }
    finally {
      loading.value = false
    }
  }

  return {
    loading,
    deviceList,
    getDeviceList,
  }
}
