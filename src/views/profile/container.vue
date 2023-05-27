<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
  <div m="t-10">
    <n-h3>{{ title }}</n-h3>
    <div m="0 md:t-8">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
