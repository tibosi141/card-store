import type { GoodItem, ProductItem } from '~/api/product'
import { productGetListApi } from '~/api/product'

export const useProduct = () => {
  const productList = productGetListApi()

  const goodList = productList
    .reduce((total: ProductItem[], item) => {
      return [...total, ...item.children]
    }, [])
    .map<GoodItem>((item) => {
      return {
        ...item,
        count: 1,
      }
    })

  return {
    productList,
    goodList,
  }
}
