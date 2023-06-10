import type { ResponseBody } from '~/utils/request'

export interface DeviceInfo {
  id: string
  type: 'PC' | 'Mobile' | 'Pad'
  brand: string
  name: string
  system: string
}

const deviceList: DeviceInfo[] = [
  {
    id: 'D6AD-A9SD-9Q5F',
    type: 'PC',
    brand: 'Lenove',
    name: 'Legion Y7000',
    system: 'Windows',
  },
  {
    id: 'L3SA-4DPL-50FD',
    type: 'Mobile',
    brand: 'Apple',
    name: 'iPhone 13 Pro',
    system: 'IOS',
  },
  {
    id: 'IFO9-DHJC-6T8C',
    type: 'Pad',
    brand: 'XiaoMi',
    name: 'Xiaomi Pad 6 Pro',
    system: 'Android',
  },
]

export const deviceGetListUrl = '/device/list'

export interface DeviceGetListParams {
  type?: string
}

export const deviceGetListApi = (params?: DeviceGetListParams) => {
  return new Promise<ResponseBody<DeviceInfo[]>>((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: deviceList,
        msg: 'OK',
      })
    }, 1000)
  })

  return usePost<DeviceGetListParams, DeviceInfo[]>(deviceGetListUrl, params)
}
