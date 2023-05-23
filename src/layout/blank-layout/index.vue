<script setup lang="ts">
import { Logo } from '../common'
import SelectLang from '../select-lang/index.vue'

const locale = useAppLocale()
const appStore = useAppStore()
const { logo, localeOptions } = storeToRefs(appStore)
</script>

<template>
  <n-el class="login-page-container h-screen">
    <div
      h="48px md:64px"
      px="20px md:10%"
      flex="~ items-center justify-end md:justify-between"
    >
      <Logo
        md="visible"
        class="invisible cursor-pointer"
        :src="logo"
      />
      <SelectLang v-model:value="locale" :options="localeOptions" />
    </div>
    <div
      w="300px sm:400px"
      m="x-auto y-50px sm:y-180px"
      p="sm:x-50px sm:y-30px"
      bg="sm:white/10"
      border="sm:rd-8px"
    >
      <slot />
    </div>
  </n-el>
</template>

<style scoped>
.login-page-container {
  background-image: url('~/assets/images/login-bg.svg');
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  background-color: rgb(16, 16, 20);
}
</style>
