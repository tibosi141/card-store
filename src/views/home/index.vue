<script setup lang="ts">
import { useDevice } from './composables/device'
import Container from './container.vue'
import DeviceItem from './device-item.vue'

const { getDeviceList, deviceList } = useDevice()

getDeviceList()
</script>

<template>
  <div>
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
    <Container>
      <template #headerRight>
        <a class="text-14px md:text-16px" href="javascript:;">
          {{ $t('home-card-title-a') }}
        </a>
      </template>
      <div flex="~ gap-6 wrap sm:gap-4% md:gap-2%">
        <template v-for="item in deviceList" :key="item.id">
          <DeviceItem :device="item" />
        </template>
      </div>
    </Container>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('~/assets/images/home-banner.webp');
}
</style>
