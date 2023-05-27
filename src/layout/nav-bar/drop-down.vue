<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <div class="group relative">
    <p
      md="block"
      flex="~ items-center justify-between"
      class="after:content-['⨠'] after:inline-block after:transition-transform after:duration-250 group-hover:after:rotate-90"
    >
      {{ `${text} ` }}
    </p>
    <div
      w="full md:180px"
      h="auto"
      p="b-8 md:x-6 md:t-6"
      flex="~ justify-between md:flex-col"
      text="5 white md:4"
      bg="md:#18181c md:clip-padding"
      border="transparent  md:t-10px"
      shadow="black/18 md:lg"
      origin="right-top md:center-top"
      md="absolute top-100% left-50% translate-x--50%"
      class="scale-0 opacity-0 duration-250 group-hover:scale-100 group-hover:opacity-100"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
