<script setup lang="ts">
const router = useRouter()

function onBack() {
  router.back()
}
</script>

<template>
  <n-result
    class="mt-48px"
    status="404"
    title="404 资源不存在"
    description="抱歉，您访问的页面不存在"
  >
    <template #footer>
      <n-button @click="onBack">
        找点乐子吧
      </n-button>
    </template>
  </n-result>
</template>

<style scoped></style>
