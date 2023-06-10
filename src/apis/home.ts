import type { ResponseBody } from '~/utils/request'

export interface CardInfo {
  id: string
  icon?: string
  title: string
  description?: string
  detail?: string
}

const cardList: CardInfo[] = [
  {
    id: 'cn',
    icon: 'i-flagpack-cn',
    title: '中国',
    description: '中国是世界四大文明古国之一',
    detail:
      '是个花费的时间会发给大家发的看法和老师速度放缓但是觉得还是快递很快返回刷卡积分回馈是否合适空间的数据库恢复的时间开发和',
  },
  {
    id: 'jp',
    icon: 'i-flagpack-jp',
    title: '日本',
    description: '日本是高度发达的现代化国家',
    detail:
      '是个花费的时间会发给大家发的看法和老师速度放缓但是觉得还是快递很快返回刷卡积分回馈是否合适空间的数据库恢复的时间开发和',
  },
  {
    id: 'kr',
    icon: 'i-flagpack-kr',
    title: '韩国',
    description: '韩国是一个资本主义发达国家',
    detail:
      '是个花费的时间会发给大家发的看法和老师速度放缓但是觉得还是快递很快返回刷卡积分回馈是否合适空间的数据库恢复的时间开发和',
  },
]

export const cardGetListUrl = '/card/list'

export interface CardGetListParams {
  type: string
}

export const cardGetListApi = (params?: CardGetListParams) => {
  return new Promise<ResponseBody<CardInfo[]>>((resolve) => {
    setTimeout(() => {
      resolve({
        code: 200,
        data: cardList,
        msg: 'OK',
      })
    }, 1000)
  })

  return usePost<CardGetListParams, CardInfo[]>(cardGetListUrl, params)
}
