<script setup lang="ts">
import type { CardProps, SpaceProps } from 'naive-ui'
import { useCard, useDevice } from './composables'
import Container from './container.vue'
import DeviceItem from './device-item.vue'
import CardItem from './card-item.vue'

const userStore = useUserStore()
const { userInfo } = toRefs(userStore)
const { isPad, isMobile } = useQueryBreakpoints()
const { cLoading, cardList, getCardList } = useCard()
const { dLoading, deviceList, getDeviceList } = useDevice()

const vertical = ref(false)
const spaceSize = ref<SpaceProps['size']>(45)
const cardSize = ref<CardProps['size']>('medium')

watchEffect(() => {
  if (isMobile.value)
    vertical.value = true
  else
    vertical.value = false

  if (isMobile.value || isPad.value) {
    spaceSize.value = 'large'
    cardSize.value = 'small'
  }
  else {
    spaceSize.value = 45
    cardSize.value = 'medium'
  }
})

getDeviceList()
getCardList()
</script>

<template>
  <div p="x-4 t-16 b-12 sm:x-8 md:x-10% md:t-18">
    <div>
      <n-divider title-placement="center">
        个人信息
      </n-divider>
      <div class="text-center">
        <n-image
          width="80"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <p m="t-8">
          用户名：
          {{ userInfo?.userName }}
        </p>
      </div>
    </div>
    <Container title="我的设备">
      <n-spin class="min-h-40" :show="dLoading">
        <n-space size="large">
          <template v-for="item in deviceList" :key="item.id">
            <DeviceItem
              :size="cardSize"
              :device="item"
            />
          </template>
        </n-space>
      </n-spin>
    </Container>
    <Container title="已有卡片">
      <n-spin class="min-h-50" :show="cLoading">
        <n-space
          :size="spaceSize"
          :vertical="vertical"
          :item-style="{
            minWidth: '350px',
          }"
        >
          <template v-for="item in cardList" :key="item.id">
            <CardItem
              :card="item"
              :size="cardSize"
            />
          </template>
        </n-space>
      </n-spin>
    </Container>
  </div>
</template>

<style scoped></style>
