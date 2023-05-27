<script setup lang="ts">
import type { CardProps } from 'naive-ui'

withDefaults(
  defineProps<{
    size?: CardProps['size']
    id: string
    name: string
    type: string
    system?: string
    brand?: string
  }>(),
  {
    size: 'medium',
  },
)
</script>

<template>
  <n-card :size="size" :title="name">
    <ul>
      <li>
        <span>ID：</span>
        <span>{{ id }}</span>
      </li>
      <li>
        <span>类型：</span>
        <span>{{ type }}</span>
      </li>
      <li>
        <span>系统：</span>
        <span>{{ system }}</span>
      </li>
      <li>
        <span>品牌：</span>
        <span>{{ brand }}</span>
      </li>
    </ul>
  </n-card>
</template>

<style scoped></style>
