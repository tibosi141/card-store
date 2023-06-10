import { cardGetListApi } from '~/apis/home'
import type { CardGetListParams, CardInfo } from '~/apis/home'

export const useCard = () => {
  const loading = ref(false)
  const cardList = ref<CardInfo[]>()

  async function getCardList(params?: CardGetListParams) {
    loading.value = true

    try {
      const { data } = await cardGetListApi(params)
      loading.value = false
      if (data) cardList.value = data
    }
    catch (err) {
      loading.value = false
    }
  }

  return {
    cardList,
    getCardList,
  }
}
