<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'

defineProps<{
  avatar?: string
  nickname?: string
  options?: DropdownOption[]
  onClick?: () => void
  onSelect?: (key: string) => void
}>()
</script>

<template>
  <n-dropdown
    trigger="click"
    :options="options"
    @select="onSelect"
  >
    <div class="flex items-center cursor-pointer" @click="onClick">
      <n-avatar
        round
        :src="avatar"
        size="small"
      />
      <span class="ml-2 hidden md:block">{{ nickname ? nickname : '点此登录' }}</span>
    </div>
  </n-dropdown>
</template>

<style scoped></style>
