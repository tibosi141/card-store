<script setup lang="ts"></script>

<template>
  <div>
    <Banner class="banner">
      <h2
        w="92% md:64%"
        m="md:t-12%"
        text="10 md:18"
        font="bold"
      >
        {{ $t('guide-banner-h2') }}
      </h2>
      <p
        w="92% md:64%"
        p="4 md:0"
        text="5 md:6"
        border="~ white md:0"
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
