<script setup lang="ts">
import type { TagProps } from 'naive-ui'
import type { GoodItem } from '~/api/product'

const props = defineProps<{
  goodItem: GoodItem
  tagSize: TagProps['size']
}>()
const emit = defineEmits(['onRemove'])

const tagType = computed<TagProps['type']>(() => {
  if (props.goodItem.type === 'regular') return 'success'
  else if (props.goodItem.type === 'higher') return 'info'
  else if (props.goodItem.type === 'super') return 'error'
  else return 'default'
})

function handleRemoveGoodItem(good: GoodItem) {
  emit('onRemove', good)
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
      <n-tag :size="tagSize" :type="tagType">
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
