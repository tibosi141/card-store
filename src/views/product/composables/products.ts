import type { GoodItem, ProductItem } from '~/apis/product'
import { productGetListApi } from '~/apis/product'

export const useProducts = () => {
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
