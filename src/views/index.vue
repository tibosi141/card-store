<script setup lang="ts">
const cardList = ref(['cn', 'jp', 'kr'])
</script>

<template>
  <div>
    <Banner class="banner">
      <h3
        w="92% md:64%"
        m="md:t-12%"
        text="6 md:8"
      >
        {{ $t('home-banner-h3') }}
      </h3>
      <h2
        w="92% md:64%"
        text="10 md:18"
        font="bold"
      >
        {{ $t('home-banner-h2') }}
      </h2>
      <p
        w="92% md:64%"
        p="4 md:0"
        text="5 md:6"
        border="~ white md:0"
      >
        {{ $t('home-banner-p') }}
      </p>
    </Banner>
    <CardList :card-list="cardList" />
  </div>
</template>

<style scoped>
.banner {
  background-image: url('~/assets/images/home-banner.webp');
}
</style>
