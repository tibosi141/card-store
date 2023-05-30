<script setup lang="ts">
import { Logo, Title } from '../common'
import NavBar from '../nav-bar/index.vue'
import RightMenu from './right-menu.vue'
import { useScrollHandle } from './composables/handle-scroll'

// const locale = useAppLocale()
const appStore = useAppStore()
const { headerConfig, navigations } = storeToRefs(appStore)
const { isScroll } = useScrollHandle()
const { isDesktop } = useQueryBreakpoints()

const logo = computed(() => headerConfig.value.logo)
const title = computed(() => headerConfig.value.title)
const openSidebar = computed(() => headerConfig.value.openSidebar)
</script>

<template>
  <n-layout min="h-100vh">
    <n-layout-header
      p="4 sm:x-4% md:x-10%"
      flex="~ items-center justify-between"
      bg="!black md:!transparent"
      class="z-10 fixed w-full font-bold"
      :class="{ 'header': isDesktop, 'on-scroll': isScroll }"
    >
      <div flex="~ gap-4 items-center" class="text-gray-300 cursor-pointer">
        <Logo :src="logo" />
        <Title :title="$t(title)" />
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
      <div flex="shrink-0">
        <RightMenu />
      </div>
    </n-layout-header>
    <n-layout-content class="min-h-screen" style="--n-color: #2a2c2c">
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
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.72);
    transform: translateX(-50%);
    transition: none;
  }

  .header.on-scroll::after {
    opacity: 1;
    width: 100%;
    transition: width, opacity, 0.35s;
  }
}
</style>
