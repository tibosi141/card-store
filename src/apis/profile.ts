export interface ResponseData<T = any> {
  totalCount: number
  pageSize: number
  totalPage: number
  currPage: number
  list: T[]
}

export interface DeviceInfo {
  id: number
  account: string
  devIp: string
  devPort: string
  password: string
  type: string
  userId?: string
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
  code?: string
}

export const deviceGetListUrl = '/card/device/list'
export const cardGetListUrl = '/card/card/list'

export const deviceGetListApi = () => {
  return usePost<any, ResponseData<DeviceInfo>>(deviceGetListUrl)
}

export const cardGetListApi = () => {
  return usePost<any, ResponseData<CardInfo>>(cardGetListUrl)
}
