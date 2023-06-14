<script setup lang="ts">
import type { DeviceInfo } from '~/apis/profile'

defineProps<{
  device: DeviceInfo
  title?: string
  icon?: string
  description?: string
  detail?: string
}>()

const { isDesktop } = useQueryBreakpoints()
</script>

<template>
  <section
    w="100% sm:48% md:23.5%"
    m="b-0 sm:b-4% md:b-2%"
    p="16px sm:20px md:24px"
    class="box-border bg-#18181c duration-250"
    hover="translate-y--2px shadow-xl shadow-black/36"
  >
    <h5 text="16px sm:18px md:20px">
      {{ $t(`home-card-item-${device.ico}-title`) }}
    </h5>
    <figure w="sm:16" m="y-4 sm:x-auto sm:y-6 md:x-0 md:y-2">
      <span text="12 sm:16 md:10" :class="`i-flagpack-${device.ico}`" />
    </figure>
    <div>
      <p m="b-6px sm:b-8px md:b-12px" text="12px gray sm:14px">
        {{ $t(`home-card-item-${device.ico}-detail`) }}
      </p>
    </div>
    <n-descriptions
      bordered
      size="small"
      label-placement="left"
      :column="isDesktop ? 1 : 2"
    >
      <n-descriptions-item label="IP">
        {{ device.devIp }}
      </n-descriptions-item>
      <n-descriptions-item :label="$t('home-card-item-port')">
        {{ device.devPort }}
      </n-descriptions-item>
      <n-descriptions-item :label="$t('home-card-item-username')">
        {{ device.account }}
      </n-descriptions-item>
      <n-descriptions-item :label="$t('home-card-item-password')">
        {{ device.password }}
      </n-descriptions-item>
    </n-descriptions>
  </section>
</template>

<style scoped></style>
