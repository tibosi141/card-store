<script setup lang="ts"></script>

<template>
  <section m="t-8px sm:t-12px md:t-14px" p="x-4 sm:x-4% md:x-10%">
    <h4 p="y-14px sm:y-20px md:y-26px" flex="~ justify-between">
      <span text="18px sm:20px md-22px" font="bold">
        {{ $t('home-card-title-span') }}
      </span>
      <div>
        <slot name="headerRight" />
      </div>
    </h4>
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped></style>
