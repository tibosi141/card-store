<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <div class="group relative">
    <p
      md="block"
      class="flex items-center justify-between after:content-['⨠'] after:inline-block after:transition-transform after:duration-250 group-hover:after:rotate-90"
    >
      {{ `${text} ` }}
    </p>
    <div
      md="top-100% left-50% w-auto ml--100% px-6 flex-col text-4 bg-#2A2C2C shadow-lg shadow-#18181b"
      class="absolute w-full h-auto py-6 flex justify-between text-white text-5 origin-center-top scale-y-0 opacity-0 duration-250 group-hover:scale-y-100 group-hover:opacity-100"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
