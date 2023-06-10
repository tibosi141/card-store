<script setup lang="ts">
import type { TagProps } from 'naive-ui'
import type { GoodItem } from '~/apis/product'

defineProps<{
  goodItem: GoodItem
  tagSize: TagProps['size']
}>()
const emit = defineEmits(['onRemove'])

function handleRemoveGoodItem(good: GoodItem) {
  emit('onRemove', good)
}

function switchTagType(type: GoodItem['type']): TagProps['type'] {
  switch (type) {
    case 'regular':
      return 'success'

    case 'higher':
      return 'info'

    case 'super':
      return 'error'

    default:
      return 'default'
  }
}
</script>

<template>
  <n-card
    closable
    header-style="padding: 1rem"
    class="bg-transparent!"
    @close="handleRemoveGoodItem(goodItem)"
  >
    <template #header>
      <n-tag :size="tagSize" :type="switchTagType(goodItem.type)">
        {{ $t(goodItem.name) }}
      </n-tag>
    </template>
    <template #header-extra>
      <div
        w="100px"
        m="l-50px"
        text="center"
      >
        <slot />
      </div>
    </template>
  </n-card>
</template>

<style scoped></style>
