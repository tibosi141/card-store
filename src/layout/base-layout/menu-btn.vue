<script setup lang="ts">
import { CloseOutlined, MenuOutlined } from '@vicons/antd'

withDefaults(
  defineProps<{
    open?: boolean
    size?: number | string
  }>(),
  {
    size: 24,
  },
)
defineEmits(['click'])
</script>

<template>
  <div class="flex items-center">
    <n-icon
      class="text-gray-300 cursor-pointer"
      :size="size"
      @click="$emit('click')"
    >
      <CloseOutlined v-if="open" />
      <MenuOutlined v-else />
    </n-icon>
  </div>
</template>

<style scoped></style>
