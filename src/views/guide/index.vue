<script setup lang="ts">
import macFirstGuidePng from '~/assets/images/guide/mac-first-guide.png'
import macMiddleGuidePng from '~/assets/images/guide/mac-middle-guide.png'
import macLastGuidePng from '~/assets/images/guide/mac-last-guide.png'
import winFirstGuidePng from '~/assets/images/guide/win-first-guide.png'
import winMiddleGuidePng from '~/assets/images/guide/win-middle-guide.png'
import winLastGuidePng from '~/assets/images/guide/win-last-guide.png'
import iosGuidePng from '~/assets/images/guide/ios-guide.png'
import androidGuidePng from '~/assets/images/guide/android-guide.png'

const downloadList = ref([
  {
    platform: 'Windows',
    href: 'https:xxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    platform: 'macOS',
    href: 'https:xxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    platform: 'Android',
    href: 'https:xxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  {
    platform: 'iOS',
    href: 'https:xxxxxxxxxxxxxxxxxxxxxxxxx',
  },
])
const platformList = ref([
  {
    key: 'macOS',
    guideList: [
      {
        tip: 'guide-addguest-macos-first',
        image: macFirstGuidePng,
      },
      {
        tip: 'guide-addguest-macos-middle',
        image: macMiddleGuidePng,
      },
      {
        tip: 'guide-addguest-macos-last',
        image: macLastGuidePng,
      },
    ],
  },
  {
    key: 'iOS',
    guideList: [
      {
        tip: 'guide-addguest-ios-first',
        image: iosGuidePng,
      },
    ],
  },
  {
    key: 'Android',
    guideList: [
      {
        tip: 'guide-addguest-android-first',
        image: androidGuidePng,
      },
    ],
  },
  {
    key: 'Windows',
    guideList: [
      {
        tip: 'guide-addguest-windows-middle',
        image: winFirstGuidePng,
      },
      {
        tip: 'guide-addguest-windows-middle',
        image: winMiddleGuidePng,
      },
      {
        tip: 'guide-addguest-windows-middle',
        image: winLastGuidePng,
      },
    ],
  },
])
const ConnectionList = ref([
  {
    title: 'guide-connection-single-title',
    detail: 'guide-connection-single-detail',
  },
  {
    title: 'guide-connection-group-title',
    detail: 'guide-connection-group-detail',
  },
])
</script>

<template>
  <Banner class="banner">
    <div class="h-full w-92% flex flex-col justify-between md:w-80%">
      <h2 class="mt-22 text-10 font-bold md:text-14">
        {{ $t('guide-banner-h2') }}
      </h2>
      <div class="w-full self-end md:mb-30 md:w-50%">
        <n-divider class="text-7!" style="--n-color: white">
          {{ $t('guide-download-title') }}
        </n-divider>
        <n-h3 prefix="bar">
          {{ $t('guide-download-platforms') }}
        </n-h3>
        <ul class="mt-6 flex flex-col gap-xl text-xl">
          <template v-for="item in downloadList" :key="item.platform">
            <li class="text-right">
              <span>{{ item.platform }}：</span>
              <a
                :href="item.href"
                class="duration-250 hover:text-dark hover:underline"
              >
                {{ $t('guide-download-link') }}
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </Banner>
  <div
    class="mx-auto w-92% flex flex-col justify-around pb-20 pt-12 md:w-80% md:py-16"
  >
    <n-divider class="text-7!" style="--n-color: white">
      {{ $t('guide-addguest-title') }}
    </n-divider>
    <div
      class="flex flex-col justify-between gap-14 md:mt-7 md:flex-row md:flex-wrap md:gap-20"
    >
      <section v-for="platform in platformList" :key="platform.key">
        <n-h3 prefix="bar">
          {{ platform.key }}
        </n-h3>
        <div class="md: flex flex-col gap-8 md:flex-row md:gap-20">
          <n-image-group>
            <figure
              v-for="(guide, index) in platform.guideList"
              :key="guide.image"
              class="w-full flex flex-col gap-8 md:items-start sm:items-center md:justify-between"
            >
              <p class="max-w-520px w-full">
                {{ `${index + 1}、${$t(guide.tip)}` }}
              </p>
              <n-image
                :src="guide.image"
                :title="$t('guide-addguest-image-title')"
              />
            </figure>
          </n-image-group>
        </div>
      </section>
    </div>
  </div>
  <div
    class="mx-auto flex flex-col justify-around bg-black/50 px-4% pb-20 pt-12 md:px-10% md:py-16"
  >
    <n-divider class="text-7!" style="--n-color: white">
      {{ $t('guide-connection-title') }}
    </n-divider>
    <n-blockquote style="--n-font-size: 1.4rem">
      {{ $t('guide-connection-introduce') }}
    </n-blockquote>
    <n-text type="info" />
    <ul class="mt-6 flex flex-col justify-between gap-8 md:flex-row">
      <li
        v-for="(item, index) in ConnectionList"
        :key="item.title"
        class="border-b-1px border-gray py-4 text-xl md:w-35% md:border-transparent"
      >
        <n-text type="info" class="text-xl">
          {{ `${index + 1}、${$t(item.title)}` }}
        </n-text>
        <p class="mt-4 indent-8 text-lg">
          {{ $t(item.detail) }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.banner {
  background-attachment: fixed;
  background-image: url('~/assets/images/guide-banner.jpg');
}
</style>
