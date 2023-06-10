<script setup lang="ts">
import { Logo } from '../common'
import SelectLang from '../select-lang/index.vue'

const locale = useAppLocale()
const appStore = useAppStore()
const { headerConfig, localeOptions } = storeToRefs(appStore)

const logo = computed(() => headerConfig.value.logo)
</script>

<template>
  <n-el class="login-page-container">
    <div p="4 md:x-10%" flex="~ items-center justify-end md:justify-between">
      <Logo
        md="visible"
        class="invisible cursor-pointer"
        :src="logo"
      />
      <SelectLang v-model:value="locale" :options="localeOptions" />
    </div>
    <div
      w="300px sm:400px"
      m="x-auto y-40px sm:y-150px"
      p="sm:x-50px sm:t-20px sm:y-50px"
      bg="sm:white/10"
      border="sm:rd-8px"
    >
      <slot />
    </div>
  </n-el>
</template>

<style scoped>
.login-page-container {
  height: 100vh;
  background-image: url('~/assets/images/login-bg.svg');
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  background-color: rgb(16, 16, 20);
}
</style>
