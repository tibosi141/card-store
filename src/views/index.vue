<script setup lang="ts">
const { message, dialog, notification, loadingBar } = useGlobalConfig()

function onMessage() {
  message?.success('Hello, world!')
}

function onDialog() {
  dialog?.success({
    title: 'Hello, world!',
    content: 'This is a success dialog.',
    onPositiveClick: onMessage,
  })
}

function onNotification() {
  notification?.success({
    title: 'Hello, world!',
    content: 'This is a success notification.',
  })
}

function onLoading() {
  loadingBar?.start()
  setTimeout(() => {
    loadingBar?.finish()
  }, 3000)
}
</script>

<template>
  <div>
    <div class="banner h-600px" />
    <n-space>
      <n-button @click="onMessage">
        Message
      </n-button>

      <n-button @click="onDialog">
        Dialog
      </n-button>

      <n-button @click="onNotification">
        Notification
      </n-button>

      <n-button @click="onLoading">
        Loading
      </n-button>
    </n-space>
    <n-space>
      <n-input />
    </n-space>
  </div>
</template>

<style></style>
