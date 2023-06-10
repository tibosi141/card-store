export interface Product {
  name: string
  type: 'regular' | 'higher' | 'super'
  children: ProductItem[]
}

export interface ProductItem {
  id: string
  type: 'regular' | 'higher' | 'super'
  name: string
  classify: string
  price: number
  flow: number
  mode: string
  online: number
}

export interface GoodItem extends ProductItem {
  count: number
}

const productList: Product[] = [
  {
    name: 'product.regular.label',
    type: 'regular',
    children: [
      {
        id: 'regular-quarter',
        type: 'regular',
        name: 'product.regular.quarter.name',
        classify: 'product.type.quarter',
        price: 4,
        flow: 100,
        mode: 'product.regular.quarter.mode',
        online: 5,
      },
      {
        id: 'regular-month',
        type: 'regular',
        name: 'product.regular.month.name',
        classify: 'product.type.month',
        price: 2,
        flow: 50,
        mode: 'product.regular.month.mode',
        online: 1,
      },
    ],
  },
  {
    name: 'product.higher.label',
    type: 'higher',
    children: [
      {
        id: 'higher-quarter',
        type: 'higher',
        name: 'product.higher.quarter.name',
        classify: 'product.type.quarter',
        price: 9,
        flow: 200,
        mode: 'product.higher.quarter.mode',
        online: 10,
      },
      {
        id: 'higher-month',
        type: 'higher',
        name: 'product.higher.month.name',
        classify: 'product.type.month',
        price: 4,
        flow: 100,
        mode: 'product.higher.month.mode',
        online: 5,
      },
    ],
  },
  {
    name: 'product.super.label',
    type: 'super',
    children: [
      {
        id: 'super-quarter',
        type: 'super',
        name: 'product.super.quarter.name',
        classify: 'product.type.quarter',
        price: 24,
        flow: 500,
        mode: 'product.super.quarter.mode',
        online: 15,
      },
      {
        id: 'super-month',
        type: 'super',
        name: 'product.super.month.name',
        classify: 'product.type.month',
        price: 10,
        flow: 500,
        mode: 'product.super.month.mode',
        online: 10,
      },
    ],
  },
]

export function productGetListApi() {
  return productList
}
