<script setup lang="ts"></script>

<template>
  <section m="t-14px sm:t-16px md:t-18px" p="x-4 b-6 md:b-16 sm:x-4% md:x-10%">
    <h4 p="y-18px sm:y-24px md:y-30px" flex="~ justify-between">
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
