export interface DeviceInfo {
  id: number
  account: string
  devIp: string
  devPort: string
  password: string
  type: string
  endTime?: number
  userId?: number
  ico: string
}

export const deviceGetListUrl = '/card/device/getList'

export const deviceGetListApi = () => {
  return useGet<any, DeviceInfo[]>(deviceGetListUrl)
}
