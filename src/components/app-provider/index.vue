<script setup lang="ts">
import naiveProvider from './naive-provider.vue'
</script>

<template>
  <n-message-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-loading-bar-provider>
          <naiveProvider>
            <slot />
          </naiveProvider>
        </n-loading-bar-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-message-provider>
</template>

<style scoped></style>
