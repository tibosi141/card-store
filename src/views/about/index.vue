<script setup lang="ts"></script>

<template>
  <Banner class="banner">
    <h2
      w="92% md:64%"
      m="md:t-12%"
      text="10 md:18"
      font="bold"
    >
      {{ $t('about-banner-h2') }}
    </h2>
    <div w="92% md:64%">
      <p m="y-4" text="6 md:10">
        {{ $t('about-banner-text-p') }}
      </p>
      <ul
        m="t-4"
        flex="~ col gap-8"
        text="md:5"
      >
        <li>{{ $t('about-banner-text-item-one') }}</li>
        <li>{{ $t('about-banner-text-item-two') }}</li>
        <li>{{ $t('about-banner-text-item-three') }}</li>
        <li>{{ $t('about-banner-text-item-four') }}</li>
        <li>{{ $t('about-banner-text-item-five') }}</li>
      </ul>
    </div>
  </Banner>
</template>

<style scoped>
.banner {
  background-image: url('~/assets/images/about-banner.png');
}
</style>
