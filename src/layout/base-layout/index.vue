<script setup lang="ts">
import { Logo, Title } from '../common'
import NavBar from '../nav-bar/index.vue'
import SelectLang from '../select-lang/index.vue'
import MenuBtn from './menu-btn.vue'

const locale = useAppLocale()
const appStore = useAppStore()
const { headerConfig, navigations, localeOptions } = storeToRefs(appStore)

const logo = computed(() => headerConfig.value.logo)
const title = computed(() => headerConfig.value.title)
const openSidebar = computed(() => headerConfig.value.openSidebar)
</script>

<template>
  <n-layout min="h-100vh">
    <n-layout-header
      p="x-20px y-4 sm:x-4% md:x-10%"
      flex="~ items-center justify-between"
      class="z-10 fixed w-full font-bold !bg-black"
    >
      <div flex="~ gap-4 items-center" class="text-gray-300 cursor-pointer">
        <Logo :src="logo" />
        <Title :title="title" />
      </div>
      <nav
        w="full"
        h="screen md:auto"
        bg="black md:transparent"
        class="absolute top-16 md:static"
        :class="[openSidebar ? 'left-0' : 'left--100%']"
      >
        <NavBar
          :open="openSidebar"
          :navigations="navigations"
          @click="appStore.toggleMenu(false)"
        />
      </nav>
      <div flex="~ gap-4 items-center">
        <SelectLang v-model:value="locale" :options="localeOptions" />
        <MenuBtn
          md="hidden"
          :open="openSidebar"
          @click="appStore.toggleMenu(!openSidebar)"
        />
      </div>
    </n-layout-header>
    <n-layout-content>
      <router-view />
    </n-layout-content>
  </n-layout>
</template>

<style scoped></style>
