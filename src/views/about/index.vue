<script setup lang="ts"></script>

<template>
  <div>
    <Banner>
      <h2 md="mt--6% text-8" class="text-10 font-bold">
        {{ $t('about-banner-h2') }}
      </h2>
      <div md="mb-0" class="mb-40%">
        <p md="my-4 text-10" class="my-4 text-6">
          {{ $t('about-banner-text-p') }}
        </p>
        <ul md="text-5" class="mt-4 flex flex-col gap-8">
          <li>{{ $t('about-banner-text-item-one') }}</li>
          <li>{{ $t('about-banner-text-item-two') }}</li>
          <li>{{ $t('about-banner-text-item-three') }}</li>
          <li>{{ $t('about-banner-text-item-four') }}</li>
          <li>{{ $t('about-banner-text-item-five') }}</li>
        </ul>
      </div>
    </Banner>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('~/assets/images/about-banner.png');
}
</style>
