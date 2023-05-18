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

const AppLocale = useApplocale()

function onSwitchLocale(locale: string) {
  AppLocale.value = locale
}
</script>

<template>
  <div>
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
    <n-space>
      <n-button @click="onSwitchLocale('zh-CN')">
        中文
      </n-button>
      <n-button @click="onSwitchLocale('en-US')">
        英文
      </n-button>
    </n-space>
  </div>
</template>

<style lang="less"></style>
