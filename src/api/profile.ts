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

export interface CardInfo {
  id: number
  type: string
  price: number
  endTime: string
  status: number
  isActive: number
  channel?: string
  device: number
  userId?: number
  code: string
  ico: string
  duration: number
}

export const deviceGetListUrl = '/card/device/getList'
export const cardGetListUrl = '/card/card/getList'

export const deviceGetListApi = () => {
  return useGet<any, DeviceInfo[]>(deviceGetListUrl)
}

export const cardGetListApi = () => {
  return useGet<any, CardInfo[]>(cardGetListUrl)
}
