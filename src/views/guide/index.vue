<script setup lang="ts"></script>

<template>
  <div>
    <Banner>
      <h2 md="text-18" class="text-10 font-bold">
        {{ $t('guide-banner-h2') }}
      </h2>
      <p
        md="w-68% mb-0 p-0 text-6 border-0"
        class="mb-46 p-4 text-5 border-white border-1"
      >
        {{ $t('guide-banner-p') }}
      </p>
    </Banner>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('~/assets/images/guide-banner.jpg');
}
</style>
