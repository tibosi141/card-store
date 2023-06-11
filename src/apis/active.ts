export const cardActivateUrl = '/card/card/activate'

export interface CardActivateParams {
  code: string
  userId: number
}

export const cardActivateApi = (params: CardActivateParams) => {
  return useGet<CardActivateParams, any>(cardActivateUrl, params)
}
