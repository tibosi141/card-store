<script setup lang="ts">
import Container from './container.vue'
import DeviceItem from './device-item.vue'
import CardItem from './card-item.vue'
import { useDeviceInfo } from './composables/device-info'
import { useMyCardInfo } from './composables/my-card'
import { useNaiveUIProps } from './composables/naive-ui-props'

const { cLoading, cardList, getCardList } = useMyCardInfo()
const { dLoading, deviceList, getDeviceList } = useDeviceInfo()
const { vertical, spaceSize, cardSize } = useNaiveUIProps()

getCardList()
getDeviceList()
</script>

<template>
  <div p="x-4 y-12 sm:x-4% md:x-10% md:t-18">
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
          ADMIN-USERS
        </p>
      </div>
    </div>
    <Container title="我的设备">
      <n-spin class="min-h-40" :show="dLoading">
        <n-space :size="spaceSize">
          <template v-for="item in deviceList" :key="item.id">
            <DeviceItem
              :id="item.id"
              :size="cardSize"
              :name="item.name"
              :type="item.type"
              :system="item.system"
              :brand="item.brand"
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
          <template v-for="(item, index) in cardList" :key="item.id">
            <CardItem
              :size="cardSize"
              :title="item.title"
              :header-icon="item.icon"
              active-code="IFO9-DHJC-6T8C"
              type="卡片"
              expiration-time="2023-12-31 23:59:59"
              :counter="index + 1"
            />
          </template>
        </n-space>
      </n-spin>
    </Container>
  </div>
</template>

<style scoped></style>
