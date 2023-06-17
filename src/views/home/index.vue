<script setup lang="ts">
import { useDevice } from './composables/device'
import CardContainer from './CardContainer.vue'
import CardItem from './CardItem.vue'

const { loading, oneList, twoList, getDeviceList } = useDevice()

getDeviceList()
</script>

<template>
  <Banner class="banner">
    <div w="94% md:80%">
      <h3 m="md:t-10%" text="6 md:8">
        {{ $t('home-banner-h3') }}
      </h3>
      <h2 text="10 md:14" font="bold">
        {{ $t('home-banner-h2') }}
      </h2>
      <p
        w="md:40%"
        p="4 md:0"
        text=" md:6"
        border="~ white md:0"
      >
        {{ $t('home-banner-p') }}
      </p>
    </div>
  </Banner>
  <div p="x-4 t-4 b-12 sm:(x-4% y-8) md:(x-10% t-2)">
    <CardContainer>
      <template #headerRight>
        <a class="text-14px md:text-16px" href="javascript:;">
          {{ $t('home-card-title-a') }}
        </a>
      </template>
      <n-spin class="min-h-60" :show="loading">
        <div flex="~ gap-6 wrap sm:gap-2%">
          <template v-for="item in oneList" :key="item.id">
            <CardItem :device="item" />
          </template>
        </div>
      </n-spin>
      <!-- <n-spin
        m="t-6 sm:t-0"
        class="min-h-60"
        :show="loading"
      >
        <div flex="~ gap-6 wrap sm:gap-4% md:gap-2%">
          <template v-for="item in twoList" :key="item.id">
            <CardItem :device="item" />
          </template>
        </div>
      </n-spin> -->
    </CardContainer>
    <CardContainer>
      <template #headerRight>
        <a class="text-14px md:text-16px" href="javascript:;">
          {{ $t('home-card-title-a') }}
        </a>
      </template>
      <n-spin class="min-h-60" :show="loading">
        <div flex="~ gap-6 wrap sm:gap-2%">
          <template v-for="item in twoList" :key="item.id">
            <CardItem :device="item" />
          </template>
        </div>
      </n-spin>
    </CardContainer>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('~/assets/images/home-banner.webp');
}
</style>
