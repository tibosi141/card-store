<script setup lang="ts">
defineProps<{ src?: string }>()
defineEmits(['click'])
</script>

<template>
  <n-image
    v-if="src"
    class="w-8 h-8"
    alt="logo"
    :src="src"
    preview-disabled
    @click="$emit('click')"
  />
</template>

<style scoped></style>
