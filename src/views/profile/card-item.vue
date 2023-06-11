<script setup lang="ts">
import type { CardProps } from 'naive-ui'
import type { CardInfo } from '~/apis/profile'

defineProps<{
  size?: CardProps['size']
  card: CardInfo
  headerIcon?: string
}>()
</script>

<template>
  <n-card
    :size="size"
    :title="String(card.userId)"
    hoverable
    :segmented="{
      content: true,
      footer: 'soft',
    }"
  >
    <template #header-extra>
      <span>
        {{ card.channel }}
      </span>
    </template>
    <ul>
      <li>
        <span>卡号：</span>
        <span>{{ card.code }}</span>
      </li>
      <li>
        <span>类型：</span>
        <span>{{ card.type }}</span>
      </li>
      <li>
        <span>是否激活：</span>
        <span>{{ card.isActive ? '已激活' : '未激活' }}</span>
      </li>
      <li>
        <span>设备数量：</span>
        <span>{{ card.device }}</span>
      </li>
    </ul>
    <template #footer>
      <p>
        <span>到期时间：</span>
        <span>{{ card.endTime }}</span>
      </p>
    </template>
  </n-card>
</template>

<style scoped></style>
