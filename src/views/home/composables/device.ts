import { deviceGetListApi } from '~/api/profile'
import type { DeviceInfo } from '~/api/profile'

export const useDevice = () => {
  const loading = ref(false)
  const userStore = useUserStore()
  const oneList = ref<DeviceInfo[]>([])
  const twoList = ref<DeviceInfo[]>([])

  async function getDeviceList() {
    loading.value = true

    try {
      const arr1 = []
      const arr2 = []
      const { data } = await deviceGetListApi()

      if (data) {
        for (let i = 0; i < data.length; i++)
          i % 2 ? arr2.push(data[i]) : arr1.push(data[i])
      }
      if (!userStore.token) {
        arr1.pop()
        arr2.pop()
      }
      oneList.value = arr1
      twoList.value = arr2
    }
    finally {
      loading.value = false
    }
  }

  return {
    loading,
    oneList,
    twoList,
    getDeviceList,
  }
}
