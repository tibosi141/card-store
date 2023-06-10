<script setup lang="ts">
defineProps<{ src?: string }>()
</script>

<template>
  <n-image
    v-if="src"
    class="h-8 w-8"
    alt="logo"
    :src="src"
    :title="$t('global.header.title')"
    preview-disabled
    @click="$router.push('/')"
  />
</template>

<style scoped></style>
