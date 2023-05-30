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
    trigger="hover"
    :options="options"
    @select="onSelect"
  >
    <div class="flex items-center cursor-pointer" @click="onClick">
      <n-avatar
        round
        :src="avatar"
        size="small"
      />
      <span class="ml-2 hidden md:block">{{ nickname }}</span>
    </div>
  </n-dropdown>
</template>

<style scoped></style>
