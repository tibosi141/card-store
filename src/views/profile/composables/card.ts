import type { CardInfo } from '~/apis/profile'
import { cardGetListApi } from '~/apis/profile'

export const useCard = () => {
  const cLoading = ref(false)
  const cardList = ref<CardInfo[]>()

  async function getCardList() {
    cLoading.value = true

    try {
      const { page } = await cardGetListApi()
      cLoading.value = false
      if (page) cardList.value = page.list
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
