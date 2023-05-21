<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <h1 v-if="title" class="w-30 text-xl">
    {{ title }}
  </h1>
</template>

<style scoped></style>
