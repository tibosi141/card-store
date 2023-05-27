<script setup lang="ts">
defineProps<{
  title: string
  icon: string
  description: string
  detail: string
}>()
</script>

<template>
  <section
    w="100% sm:48% md:22%"
    m="b-20px sm:b-4%"
    p="16px sm:20px md:24px"
    class="box-border bg-#18181c duration-250"
    hover="translate-y--2px shadow-xl shadow-black/36"
  >
    <h5 text="16px sm:18px md:20px">
      {{ title }}
    </h5>
    <figure w="sm:16" m="y-14px sm:x-auto sm:y-20px md:x-0">
      <span text="12 sm:16 md:10" :class="icon" />
    </figure>
    <div>
      <p m="t-6px sm:t-10px md:t-6px" text="14px sm:16px sm:center md:left">
        {{ description }}
      </p>
      <p m="t-6px sm:t-8px md:t-4px" text="12px gray sm:14px">
        {{ detail }}
      </p>
    </div>
  </section>
</template>

<style scoped></style>
