<script setup lang="ts">
const cardList = ref(['cn', 'jp', 'kr'])
</script>

<template>
  <div>
    <Banner>
      <h3 md="text-8" class="text-6">
        {{ $t('home-banner-h3') }}
      </h3>
      <h2 md="text-18" class="text-10 font-bold">
        {{ $t('home-banner-h2') }}
      </h2>
      <p
        md="w-68% mb-0 p-0 text-6 border-0"
        class="mb-46 p-4 text-5 border-white border-1"
      >
        {{ $t('home-banner-p') }}
      </p>
    </Banner>
    <CardList :data="cardList" />
  </div>
</template>

<style scoped>
.banner {
  background-image: url('~/assets/images/home-banner.webp');
}
</style>
