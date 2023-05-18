<script setup lang="ts">
import { darkTheme } from 'naive-ui'

const { naiveLocale } = useAutoLocale()
</script>

<template>
  <n-config-provider
    :theme="darkTheme"
    :locale="naiveLocale.locale"
    :date-locale="naiveLocale.dateLocale"
  >
    <AppProvider>
      <router-view />
    </AppProvider>
  </n-config-provider>
</template>

<style scoped></style>
