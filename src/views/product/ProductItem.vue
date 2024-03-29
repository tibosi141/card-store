<script setup lang="ts">
import type { CardProps, SpaceProps, TextProps } from 'naive-ui'
import type { Product } from '~/api/product'

const props = defineProps<{
  product: Product
  cardSize: CardProps['size']
  spaceSize: SpaceProps['size']
  vertical: boolean
}>()

const textType = computed<TextProps['type']>(() => {
  if (props.product.type === 'regular') return 'success'
  else if (props.product.type === 'higher') return 'info'
  else if (props.product.type === 'super') return 'error'
  else return 'default'
})
</script>

<template>
  <n-card
    hoverable
    :size="cardSize"
    :segmented="{
      content: true,
      footer: 'soft',
    }"
  >
    <template #header>
      <NText :type="textType">
        {{ $t(product.name) }}
      </NText>
    </template>
    <n-space
      :size="spaceSize"
      :vertical="vertical"
      justify="space-between"
      :item-style="{
        flex: 1,
      }"
    >
      <n-descriptions
        v-for="item in product.children"
        :key="item.id"
        label-placement="left"
        bordered
        size="small"
        :column="1"
        label-align="center"
      >
        <template #header>
          <n-divider class="m-0!">
            {{ $t(item.classify) }}
          </n-divider>
          <!-- <div flex="~ justify-between">
            <span>{{ $t(item.classify) }}</span>
            <n-checkbox :value="item.id" />
          </div> -->
        </template>
        <n-descriptions-item
          :label="$t('product.label.flow')"
          :content-style="{ textAlign: 'center' }"
        >
          {{ `${item.flow}GB` }}
        </n-descriptions-item>
        <n-descriptions-item
          :label="$t('product.label.mode')"
          :content-style="{ textAlign: 'center' }"
        >
          {{ $t(item.mode) }}
        </n-descriptions-item>
        <n-descriptions-item
          :label="$t('product.label.price')"
          :content-style="{ textAlign: 'center' }"
        >
          {{ `￥${item.price}` }}
        </n-descriptions-item>
        <n-descriptions-item
          :label="$t('product.label.number')"
          :content-style="{ textAlign: 'center' }"
        >
          {{ item.online }}
        </n-descriptions-item>
      </n-descriptions>
    </n-space>
  </n-card>
</template>

<style scoped></style>
