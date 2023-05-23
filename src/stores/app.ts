import type { DropdownOption } from 'naive-ui'
import { defineStore } from 'pinia'
import logoSvg from '~/assets/vue.svg'

export interface Navigation {
  path: string
  label: string
  type: 'link' | 'button'
}

export const useAppStore = defineStore('app', () => {
  const { t } = useI18n()

  const logo = ref(logoSvg)
  const title = computed(() => t('global.header.title') && '')

  const open = ref(false)
  function closeMenu() {
    open.value = false
  }
  function toggleMenu() {
    open.value = !open.value
  }

  const navigations = computed<Navigation[]>(() => {
    return [
      {
        path: '/',
        label: t('global.navigation.home'),
        type: 'link',
      },
      {
        path: '/guide',
        label: t('global.navigation.guide'),
        type: 'link',
      },
      {
        path: '/about',
        label: t('global.navigation.about'),
        type: 'link',
      },
      {
        path: '~',
        label: t('global.navigation.contact'),
        type: 'button',
      },
    ]
  })

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

  return {
    logo,
    title,
    open,
    closeMenu,
    toggleMenu,
    navigations,
    localeOptions,
  }
})
