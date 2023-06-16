<script setup lang="ts">
import type { FormProps } from 'naive-ui'
import { useActive } from './composables/active'

const { isDesktop, isMobile } = useQueryBreakpoints()
const { loading, formRef, formModel, rules, handleActive } = useActive()

const inline = ref<FormProps['inline']>(true)
const labelAlign = ref<FormProps['labelPlacement']>('left')

watchEffect(() => {
  if (isDesktop.value) labelAlign.value = 'left'
  else labelAlign.value = 'top'

  if (isMobile.value) inline.value = false
  else inline.value = true
})
</script>

<template>
  <Banner class="banner">
    <div
      w="full"
      h="full"
      p="md:t-2 x-4 sm:x-4% md:x-10%"
    >
      <n-h2 class="text-center my-10!">
        {{ $t('active.title') }}
      </n-h2>
      <div
        m="x-auto"
        w="full sm:92% md:48%"
        flex="~ col gap-4 sm:gap-8 sm:items-center sm:row md:items-start"
      >
        <n-form
          ref="formRef"
          :inline="inline"
          :model="formModel"
          :rules="rules"
          size="large"
          :label-placement="labelAlign"
          label-width="150"
        >
          <n-form-item
            class="flex-1"
            :label="$t('active.code.label')"
            path="code"
          >
            <n-input
              v-model:value="formModel.code"
              :placeholder="$t('active.code.placeholder')"
            />
          </n-form-item>
        </n-form>
        <n-button
          class="sm:w-8rem!"
          type="primary"
          strong
          secondary
          size="large"
          :loading="loading"
          @click="handleActive"
        >
          {{ $t('active.activate.btn') }}
        </n-button>
      </div>
    </div>
  </Banner>
</template>

<style scoped>
.banner {
  background-image: linear-gradient(to top, #537895 0%, #09203f 100%);
}
</style>
