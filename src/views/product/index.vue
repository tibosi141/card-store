<script setup lang="ts">
import type { TagProps } from 'naive-ui'
const { t } = useI18n()

interface RootObject {
  label: string
  children: Child[]
}

interface Child {
  id: string
  name: string
  classify: string
  price: string
  flow: string
  type: string
  online: string
}

interface Shop extends Child {
  count: number
}

const productList: RootObject[] = [
  {
    label: 'product.regular.label',
    children: [
      {
        id: 'regular-quarter',
        name: 'product.regular.quarter.name',
        classify: 'product.type.quarter',
        price: 'product.regular.quarter.price',
        flow: 'product.regular.quarter.flow',
        type: 'product.regular.quarter.type',
        online: 'product.regular.quarter.online',
      },
      {
        id: 'regular-month',
        name: 'product.regular.month.name',
        classify: 'product.type.month',
        price: 'product.regular.month.price',
        flow: 'product.regular.month.flow',
        type: 'product.regular.month.type',
        online: 'product.regular.month.online',
      },
    ],
  },
  {
    label: 'product.higher.label',
    children: [
      {
        id: 'higher-quarter',
        name: 'product.higher.quarter.name',
        classify: 'product.type.quarter',
        price: 'product.higher.quarter.price',
        flow: 'product.higher.quarter.flow',
        type: 'product.higher.quarter.type',
        online: 'product.higher.quarter.online',
      },
      {
        id: 'higher-month',
        name: 'product.higher.month.name',
        classify: 'product.type.month',
        price: 'product.higher.month.price',
        flow: 'product.higher.month.flow',
        type: 'product.higher.month.type',
        online: 'product.higher.month.online',
      },
    ],
  },
  {
    label: 'product.super.label',
    children: [
      {
        id: 'super-quarter',
        name: 'product.super.quarter.name',
        classify: 'product.type.quarter',
        price: 'product.super.quarter.price',
        flow: 'product.super.quarter.flow',
        type: 'product.super.quarter.type',
        online: 'product.super.quarter.online',
      },
      {
        id: 'super-month',
        name: 'product.super.month.name',
        classify: 'product.type.month',
        price: 'product.super.month.price',
        flow: 'product.super.month.flow',
        type: 'product.super.month.type',
        online: 'product.super.month.online',
      },
    ],
  },
]

const array = productList
  .reduce((total: Child[], item: RootObject) => {
    return [...total, ...item.children]
  }, [])
  .map((product) => {
    return { ...product, count: 1 }
  })

const selectList = ref<string[]>()
const shopCar = ref<Shop[]>()

const { dialog, message } = useGlobalConfig()
function handleClose(val: string) {
  dialog?.warning({
    title: '警告',
    content: '确定要移除此商品？',
    positiveText: '确定',
    negativeText: '取消',
    onPositiveClick: () => {
      array.forEach((item) => {
        if (item.id === val) item.count = 1
      })

      selectList.value = selectList.value?.filter(item => item !== val)
      message?.success('已移除')
    },
    onNegativeClick: () => {
      message?.info('操作取消')
    },
  })
}

function switchTagType(id: string): TagProps['type'] {
  if (id.startsWith('regular')) return 'success'
  else if (id.startsWith('higher')) return 'info'
  else if (id.startsWith('super')) return 'error'
}

const value = ref('')
const payList = [
  {
    label: '支付宝',
    value: '支付宝',
  },
  {
    label: '微信',
    value: '微信',
  },
]

const total = computed(() => {
  return shopCar.value?.reduce((total, item) => {
    // console.log(item.price.match(/^[0-9]*$/))
    return total + parseInt(t(item.price)) * item.count
  }, 0)
})

watch(selectList, (v) => {
  shopCar.value = (v as string[]).map((item: string) =>
    array.find(value => value.id === item),
  ) as Shop[]
  if (!v?.length) value.value = ''
})
</script>

<template>
  <div p="x-4 y-12 sm:x-4% md:x-10% md:t-24">
    <n-space size="large" justify="space-between">
      <n-card
        v-for="product in productList"
        :key="product.label"
        :title="$t(product.label)"
        hoverable
        :segmented="{
          content: true,
          footer: 'soft',
        }"
      >
        <n-checkbox-group v-model:value="selectList">
          <n-space :size="40" justify="space-between">
            <n-descriptions
              v-for="item in product.children"
              :key="item.id"
              label-placement="left"
              bordered
              :column="1"
              label-align="center"
            >
              <template #header>
                <div flex="~ justify-between">
                  <span>{{ $t(item.classify) }}</span>
                  <n-checkbox :value="item.id" />
                </div>
              </template>
              <n-descriptions-item
                :label="$t('product.label.flow')"
                :content-style="{ textAlign: 'center' }"
              >
                {{ $t(item.flow) }}
              </n-descriptions-item>
              <n-descriptions-item
                :label="$t('product.label.type')"
                :content-style="{ textAlign: 'center' }"
              >
                {{ $t(item.type) }}
              </n-descriptions-item>
              <n-descriptions-item
                :label="$t('product.label.price')"
                :content-style="{ textAlign: 'center' }"
              >
                {{ $t(item.price) }}
              </n-descriptions-item>
              <n-descriptions-item
                :label="$t('product.label.number')"
                :content-style="{ textAlign: 'center' }"
              >
                {{ $t(item.online) }}
              </n-descriptions-item>
            </n-descriptions>
          </n-space>
        </n-checkbox-group>
      </n-card>
    </n-space>
    <div m="t-16">
      <div flex="~ gap-24 justify-between">
        <p text="xl" flex="shrink-0">
          确认信息:
        </p>
        <n-space size="large" justify="end">
          <n-card
            v-for="item in shopCar"
            :key="item.id"
            closable
            header-style="padding: 1rem"
            class="bg-transparent!"
            @close="handleClose(item.id)"
          >
            <template #header>
              <n-tag :type="switchTagType(item.id)" size="large">
                {{ $t(item.name) }}
              </n-tag>
            </template>
            <template #header-extra>
              <div w="150px" m="l-50px">
                <n-input-number
                  v-model:value="item.count"
                  button-placement="both"
                  :min="1"
                  :max="99"
                />
              </div>
            </template>
          </n-card>
        </n-space>
      </div>
      <n-divider />
      <div flex="~ gap-24">
        <p text="xl" flex="shrink-0">
          支付方式:
        </p>
        <n-radio-group v-model:value="value" name="radiogroup">
          <n-space vertical>
            <n-radio
              v-for="pay in payList"
              :key="pay.value"
              :value="pay.value"
              :disabled="!Boolean(shopCar?.length)"
            >
              {{ pay.label }}
            </n-radio>
          </n-space>
        </n-radio-group>
        <div v-if="value">
          <img
            width="150"
            src="@/assets/images/ercode.jpg"
            alt=""
          >
          <p>{{ `需使用${value}扫码支付: ${total}` }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
