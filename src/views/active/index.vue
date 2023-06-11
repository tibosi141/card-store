<script setup lang="ts">
import type { FormProps } from 'naive-ui'
import { useActive } from './composables/active'

const { isDesktop, isMobile } = useQueryBreakpoints()
const { loading, formRef, formModel, rules, handleActive } = useActive()

const inline = ref<FormProps['inline']>(true)
const labelAlign = ref<FormProps['labelPlacement']>('left')

watchEffect(() => {
  if (isDesktop.value)
    labelAlign.value = 'left'
  else
    labelAlign.value = 'top'

  if (isMobile.value)
    inline.value = false

  else
    inline.value = true
})
</script>

<template>
  <div p="x-4 t-24 b-12 sm:x-4% md:x-10%">
    <div m="x-auto t-12 sm:x-0" w="full md:32rem">
      <n-form
        ref="formRef"
        :inline="inline"
        :model="formModel"
        :rules="rules"
        :label-placement="labelAlign"
      >
        <n-form-item
          class="flex-1"
          :label="$t('active.code.label')"
          path="code"
        >
          <n-input v-model:value="formModel.code" :placeholder="$t('active.code.placeholder')" />
        </n-form-item>
        <n-form-item>
          <div class="w-full flex justify-center">
            <n-button
              strong
              :loading="loading"
              @click="handleActive"
            >
              {{ $t('active.activate.btn') }}
            </n-button>
          </div>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>
