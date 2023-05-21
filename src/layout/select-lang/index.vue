<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'
import LangIcon from './lang-icon.vue'

defineProps<{ value: string; options: DropdownOption[] }>()
defineEmits(['update:value'])
</script>

<template>
  <NDropdown
    trigger="hover"
    :value="value"
    :options="options"
    @select="$emit('update:value', $event)"
  >
    <div text="~ 6 md:7" class="text-gray-300 cursor-pointer">
      <LangIcon />
    </div>
  </NDropdown>
</template>

<style scoped></style>
