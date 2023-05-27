<script setup lang="ts">
import type { CardProps } from 'naive-ui'

withDefaults(
  defineProps<{
    size?: CardProps['size']
    title: string
    headerIcon?: string
    activeCode?: string
    type?: string
    expirationTime?: string
    counter?: number
  }>(),
  {
    size: 'medium',
  },
)
</script>

<template>
  <n-card
    :size="size"
    :title="title"
    hoverable
    :segmented="{
      content: true,
      footer: 'soft',
    }"
  >
    <template #header-extra>
      <span text="10 sm:16 md:8" :class="headerIcon" />
    </template>
    <ul>
      <li>
        <span>激活码：</span>
        <span>{{ activeCode }}</span>
      </li>
      <li>
        <span>类型：</span>
        <span>{{ type }}</span>
      </li>
      <li>
        <span>设备数量：</span>
        <span>{{ counter }}</span>
      </li>
    </ul>
    <template #footer>
      <p>
        <span>到期时间：</span>
        <span>{{ expirationTime }}</span>
      </p>
    </template>
  </n-card>
</template>

<style scoped></style>
