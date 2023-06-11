<script setup lang="ts">
import type { CardProps } from 'naive-ui'
import type { DeviceInfo } from '~/apis/profile'

defineProps<{
  size: CardProps['size']
  device: DeviceInfo
}>()
</script>

<template>
  <n-card
    hoverable
    :size="size"
    :title="device.account"
  >
    <ul>
      <li>
        <span>ID：</span>
        <span>{{ device.id }}</span>
      </li>
      <li>
        <span>类型：</span>
        <span>{{ device.type }}</span>
      </li>
      <li>
        <span>IP：</span>
        <span>{{ device.devIp }}</span>
      </li>
      <li>
        <span>端口：</span>
        <span>{{ device.devPort }}</span>
      </li>
    </ul>
  </n-card>
</template>

<style scoped></style>
