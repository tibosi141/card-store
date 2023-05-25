<script setup lang="ts">
import { Logo, Title } from '../common'
import NavBar from '../nav-bar/index.vue'
import SelectLang from '../select-lang/index.vue'
import MenuBtn from './menu-btn.vue'
import LayoutBtn from './layout-btn.vue'
import { useScrollHandle } from './handle-scroll'

const locale = useAppLocale()
const appStore = useAppStore()
const userStore = useUserStore()
const { headerConfig, navigations, localeOptions } = storeToRefs(appStore)
const { isScroll } = useScrollHandle()
const { isDesktop } = useQueryBreakpoints()

const logo = computed(() => headerConfig.value.logo)
const title = computed(() => headerConfig.value.title)
const openSidebar = computed(() => headerConfig.value.openSidebar)
</script>

<template>
  <n-layout min="h-100vh">
    <n-layout-header
      p="x-20px y-4 sm:x-4% md:x-10%"
      flex="~ items-center justify-between"
      bg="!black md:!transparent"
      class="z-10 fixed w-full font-bold"
      :class="{ 'header': isDesktop, 'on-scroll': isDesktop && isScroll }"
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
        <LayoutBtn @click="userStore.logout" />
      </div>
    </n-layout-header>
    <n-layout-content>
      <router-view />
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
@media (min-width: 1440px) {
  .header::after {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 50%;
    width: 80%;
    height: 100%;
    opacity: 0;
    background-color: black;
    transform: translateX(-50%);
    transition: none;
  }

  .header.on-scroll::after {
    opacity: 1;
    width: 100%;
    transition: width, opacity, 0.35s linear;
  }
}
</style>
