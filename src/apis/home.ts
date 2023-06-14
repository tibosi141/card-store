import type { DeviceInfo, ResponseData } from './profile'

export const deviceGetListUrl = '/card/device/list'

export const deviceGetListApi = () => {
  return usePost<any, ResponseData<DeviceInfo>>(deviceGetListUrl)
}
