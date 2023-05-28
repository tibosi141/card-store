<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import {
  CloseOutlined,
  LoginOutlined,
  MenuOutlined,
  UserOutlined,
} from '@vicons/antd'
import type { Component } from 'vue'
import SelectLang from '../select-lang/index.vue'
import SelectUser from '../select-user/index.vue'

const router = useRouter()
const { t } = useI18n()
const locale = useAppLocale()
const appStore = useAppStore()
const userStore = useUserStore()
const openSidebar = computed(() => appStore.headerConfig.openSidebar)
const avatar = computed(() => userStore.userInfo?.avatar)
const nickname = computed(() => userStore.userInfo?.nickname)
const renderIcon = (icon: Component) =>
  h(NIcon, null, { default: () => h(icon) })

const userOptions = ref<DropdownOption[]>([
  {
    key: 'user-center',
    label: () => t('global.user.center'),
    icon: () => renderIcon(UserOutlined),
  },
  {
    key: 'header-divider',
    type: 'divider',
  },
  {
    key: 'logout',
    label: () => t('global.user.logout'),
    icon: () => renderIcon(LoginOutlined),
  },
])

function handleClick() {
  if (!userStore.userInfo) router.push('/login')
}

const handleSelect = (key: string) => {
  if (key === 'user-center') router.push('/profile')
  if (key === 'logout') userStore.logout()
}
</script>

<template>
  <div flex="~ gap-4 items-center shrink-0">
    <SelectUser
      :avatar="avatar"
      :nickname="nickname"
      :options="userOptions"
      @click="handleClick"
      @select="handleSelect"
    />
    <SelectLang v-model:value="locale" :options="appStore.localeOptions" />
    <NIcon
      class="text-gray-300 cursor-pointer md:hidden!"
      :size="24"
      @click="appStore.toggleMenu(!openSidebar)"
    >
      <CloseOutlined v-if="openSidebar" />
      <MenuOutlined v-else />
    </NIcon>
  </div>
</template>

<style scoped></style>
