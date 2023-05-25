<script setup lang="ts">
import { LogoutOutlined } from '@vicons/antd'

withDefaults(
  defineProps<{
    size?: number | string
  }>(),
  {
    size: 24,
  },
)
defineEmits(['click'])
</script>

<template>
  <n-icon
    class="text-gray-300 cursor-pointer"
    :size="size"
    @click="$emit('click')"
  >
    <LogoutOutlined />
  </n-icon>
</template>

<style scoped>

</style>
