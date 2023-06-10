<script setup lang="ts">
const router = useRouter()

function onBack() {
  router.back()
}
</script>

<template>
  <div class="grid h-screen place-items-center">
    <n-result
      w="92%"
      status="404"
      :title="$t('global.error.title')"
      :description="$t('global.error.content')"
    >
      <template #footer>
        <n-button @click="onBack">
          {{ $t('global.error.back') }}
        </n-button>
      </template>
    </n-result>
  </div>
</template>

<style scoped></style>
