import type { DropdownOption } from 'naive-ui'
import { defineStore } from 'pinia'
import logoSvg from '~/assets/vue.svg'

export interface HeaderConfig {
  logo: string
  title: string
  openSidebar: boolean
}

export interface NavigationInfo {
  path: string
  label: string
  type: 'link' | 'button'
}

export const useAppStore = defineStore('app', () => {
  const headerConfig = reactive<HeaderConfig>({
    logo: logoSvg,
    title: 'global.header.title',
    openSidebar: false,
  })

  const navigations = ref<NavigationInfo[]>([
    {
      path: '/',
      label: 'global.header.navigation.home',
      type: 'link',
    },
    {
      path: '/guide',
      label: 'global.header.navigation.guide',
      type: 'link',
    },
    {
      path: '/about',
      label: 'global.header.navigation.about',
      type: 'link',
    },
    {
      path: '/product',
      label: 'global.header.navigation.product',
      type: 'link',
    },
    {
      path: '~',
      label: 'global.header.navigation.contact',
      type: 'button',
    },
  ])

  const localeOptions = computed<DropdownOption[]>(() => {
    return [
      {
        key: 'zh-CN',
        label: '简体中文',
        icon: () => h('span', { class: 'text-4 i-flagpack-cn' }),
      },
      {
        key: 'en-US',
        label: 'English',
        icon: () => h('span', { class: 'text-4 i-flagpack-us' }),
      },
    ]
  })

  function toggleMenu(val: boolean) {
    headerConfig.openSidebar = val
  }

  return {
    headerConfig,
    navigations,
    localeOptions,
    toggleMenu,
  }
})
