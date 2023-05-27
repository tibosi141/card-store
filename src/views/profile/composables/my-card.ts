import type { CardGetListParams, CardInfo } from '~/apis/home'
import { cardGetListApi } from '~/apis/home'

export function useMyCardInfo() {
  const cLoading = ref(false)
  const cardList = ref<CardInfo[]>()

  async function getCardList(params?: CardGetListParams) {
    cLoading.value = true

    try {
      const { data } = await cardGetListApi(params)
      cLoading.value = false
      if (data) cardList.value = data
    }
    catch (err) {
      cLoading.value = false
    }
  }

  return {
    cLoading,
    cardList,
    getCardList,
  }
}
