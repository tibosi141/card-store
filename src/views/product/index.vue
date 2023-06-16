<script setup lang="ts">
import type {
  CardProps,
  InputNumberProps,
  RadioProps,
  SpaceProps,
  TagProps,
} from 'naive-ui'
import { useProduct } from './composables/product'
// import { useShopCar } from './composables/shop-car'
// import { usePay } from './composables/pay'
import ProductItem from './ProductItem.vue'
// import ShopItem from './ShopCarItem.vue'

const { isDesktop, isPad } = useQueryBreakpoints()
const { productList } = useProduct()
// const { multipleList, shopCar, totalPrice, onRemove } = useShopCar(goodList)
// const { pay, payErCode, payModeList, handlePay } = usePay()

const vertical = ref(false)
const itemVertical = ref(false)
const spaceSize = ref<SpaceProps['size']>(60)
const justify = ref<SpaceProps['justify']>('start')
const cardSize = ref<CardProps['size']>('medium')
const tagSize = ref<TagProps['size']>('large')
const inputSize = ref<InputNumberProps['size']>('medium')
const radioSize = ref<RadioProps['size']>('large')

// function reset() {
//   multipleList.value = []
//   pay.mode = ''
// }

watchEffect(() => {
  if (isDesktop.value) {
    justify.value = 'start'
    vertical.value = false
    tagSize.value = 'large'
    inputSize.value = 'medium'
  }
  else {
    justify.value = 'space-between'
    vertical.value = true
    tagSize.value = 'medium'
    inputSize.value = 'small'
  }

  if (isDesktop.value || isPad.value) {
    itemVertical.value = false
    spaceSize.value = 45
    cardSize.value = 'medium'
    radioSize.value = 'large'
  }
  else {
    itemVertical.value = true
    spaceSize.value = 24
    cardSize.value = 'small'
    radioSize.value = 'medium'
  }

  // if (!multipleList.value?.length || pay.state) reset()
})
</script>

<template>
  <Banner
    class="banner"
    h="md:screen"
    p="0"
  >
    <div
      w="full"
      h="full"
      p="x-4 t-16 b-12 sm:x-4% md:x-10%"
      flex="md:~ col justify-center sm:gap-10"
      bg="black/55"
    >
      <n-h2 class="text-center my-10!">
        {{ $t('product.title') }}
      </n-h2>
      <n-space
        :size="spaceSize"
        :vertical="vertical"
        justify="space-between"
        :item-style="{
          flex: 1,
        }"
      >
        <template v-for="item in productList" :key="item.name">
          <ProductItem
            :product="item"
            :card-size="cardSize"
            :space-size="spaceSize"
            :vertical="itemVertical"
          />
        </template>
      </n-space>
    </div>
  </Banner>
  <!-- <div
    h="md:screen"
    p="x-4 t-24 b-12 sm:x-4% md:x-10%"
    flex="md:~ col justify-center"
  >
    <n-checkbox-group v-model:value="multipleList">
    <n-space
      size="large"
      :vertical="vertical"
      justify="space-between"
      :item-style="{
        flex: 1,
      }"
    >
      <template v-for="item in productList" :key="item.name">
        <ProductItem
          :product="item"
          :card-size="cardSize"
          :space-size="spaceSize"
          :vertical="itemVertical"
        />
      </template>
    </n-space>
    </n-checkbox-group>
    <div m="t-8 md:t-16">
      <div flex="~ gap-6 col md:row md:justify-between">
        <div
          flex="~ items-center justify-between md:gap-21.5 md:col md:items-start"
        >
          <n-h3 m="b-0!" prefix="bar">
            {{ $t('product.shop-car.title') }}
          </n-h3>
          <p text="lg right sm:xl md:lg md:left">
            {{ $t('product.shop-car.total') }}：
            <n-text strong type="error">
              {{ totalPrice ? totalPrice : 0 }}
            </n-text>
          </p>
        </div>
        <div flex="1 md:grow-.77">
          <n-space
            size="large"
            :justify="justify"
            :vertical="itemVertical"
          >
            <template v-for="item in shopCar" :key="item.id">
              <ShopItem
                :good-item="item"
                :tag-size="tagSize"
                @on-remove="onRemove"
              >
                <n-input-number
                  v-model:value="item.count"
                  button-placement="both"
                  :min="1"
                  :max="99"
                  :size="inputSize"
                />
              </ShopItem>
            </template>
          </n-space>
        </div>
      </div>
      <n-divider />
      <div flex="~ gap-6 col md:row md:items-start md:justify-between">
        <div flex="~ items-center justify-between md:gap-6">
          <n-h3 m="b-0!" prefix="bar">
            {{ $t('product.pay.title') }}
          </n-h3>
          <n-radio-group
            v-model:value="pay.mode"
            name="radiogroup"
            :size="radioSize"
            :disabled="!Boolean(totalPrice)"
          >
            <n-space :size="20">
              <n-radio-button
                v-for="item in payModeList"
                :key="item.value"
                :value="item.value"
                :label="$t(item.label)"
              />
            </n-space>
          </n-radio-group>
        </div>
        <div v-if="payErCode" flex="~ gap-6 col items-center">
          <n-image
            width="150"
            :src="payErCode"
          />
          <n-button @click="handlePay">
            {{ $t('product.pay.finish') }}
          </n-button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
.banner {
  background-image: url('~/assets/images/product-banner.webp');
}
</style>
