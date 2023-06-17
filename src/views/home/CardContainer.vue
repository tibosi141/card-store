<script setup lang="ts"></script>

<template>
  <section m="t-6 md:t-8">
    <h4 p="b-18px sm:b-24px md:b-30px" flex="~ justify-between">
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
