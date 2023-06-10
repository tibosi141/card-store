import { xor } from 'lodash-es'
import type { GoodItem } from '~/apis/product'

export const useShoping = (goodList: GoodItem[]) => {
  const { t } = useI18n()
  const { message, dialog } = useGlobalConfig()
  const multipleList = ref<string[]>()
  const shopCar = ref<GoodItem[]>()

  const totalPrice = computed(() => {
    return shopCar.value?.reduce((total, item) => {
      return total + item.price * item.count
    }, 0)
  })

  function onRemove(good: GoodItem) {
    const goodName = t(good.name)

    dialog?.warning({
      title: t('global.dialog.title.warn'),
      content: `${t('product.removed.good.content')} ${goodName}`,
      positiveText: t('global.dialog.btn.confirm'),
      negativeText: t('global.dialog.btn.cancle'),
      onPositiveClick: () => {
        multipleList.value = multipleList.value?.filter(item => item !== good.id)
        message?.success(`${goodName} ${t('product.removed.good.message')}`)
      },
      onNegativeClick: () => {
        message?.info(t('global.dialog.message.cancle'))
      },
    })
  }

  watch(multipleList, (newVal, oldVal) => {
    const removeList = xor(newVal, oldVal)
    removeList.forEach((id) => {
      goodList.forEach((item) => {
        if (item.id === id) item.count = 1
      })
    })
    shopCar.value = newVal?.map(id => goodList.find(item => item.id === id)) as GoodItem[]
  })

  return {
    multipleList,
    shopCar,
    totalPrice,
    onRemove,
  }
}
