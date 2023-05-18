<script setup lang="ts">
const message = useMessage()
const dialog = useDialog()
const notification = useNotification()
const loadingBar = useLoadingBar()

useGlobalConfigProvider({
  message,
  dialog,
  notification,
  loadingBar,
})
</script>

<template>
  <slot />
</template>

<style scoped>

</style>
