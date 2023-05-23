<script setup lang="ts">
import { Logo, Title } from '../common'
import NavBar from '../nav-bar/index.vue'
import SelectLang from '../select-lang/index.vue'
import MenuBtn from './menu-btn.vue'

const locale = useAppLocale()
const appStore = useAppStore()
const { logo, title, open, navigations, localeOptions } = storeToRefs(appStore)
</script>

<template>
  <n-layout class="min-h-100vh">
    <n-layout-header
      md="px-10%"
      sm="px-4%"
      class="z-10 fixed w-full px-20px py-4 flex items-center justify-between font-bold !bg-black"
    >
      <div class="flex gap-4 items-center text-gray-300 cursor-pointer">
        <Logo :src="logo" />
        <Title :title="title" />
      </div>
      <nav
        md="static h-auto bg-transparent"
        class="absolute top-16 w-full h-screen bg-black"
        :class="[open ? 'left-0' : 'left--100%']"
      >
        <NavBar
          :open="open"
          :navigations="navigations"
          @click="appStore.closeMenu"
        />
      </nav>
      <div class="flex items-center gap-4">
        <SelectLang v-model:value="locale" :options="localeOptions" />
        <MenuBtn
          md="hidden"
          :open="open"
          @click="appStore.toggleMenu"
        />
      </div>
    </n-layout-header>
    <n-layout-content>
      <router-view />
    </n-layout-content>
  </n-layout>
</template>

<style scoped></style>
