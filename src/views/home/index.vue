<script setup lang="ts">
import Container from './container.vue'
import CardItem from './card-item.vue'

const cardList = ref([
  {
    id: 'cn',
    icon: 'i-flagpack-cn',
    title: 'home-card-item-cn-title',
    description: 'home-card-item-cn-desc',
    detail: 'home-card-item-cn-detail',
  },
  {
    id: 'jp',
    icon: 'i-flagpack-jp',
    title: 'home-card-item-jp-title',
    description: 'home-card-item-jp-desc',
    detail: 'home-card-item-jp-detail',
  },
  {
    id: 'kr',
    icon: 'i-flagpack-kr',
    title: 'home-card-item-kr-title',
    description: 'home-card-item-kr-desc',
    detail: 'home-card-item-kr-detail',
  },
])
</script>

<template>
  <div>
    <Banner class="banner">
      <div w="94% md:80%">
        <h3 m="md:t-10%" text="6 md:8">
          {{ $t('home-banner-h3') }}
        </h3>
        <h2 text="10 md:14" font="bold">
          {{ $t('home-banner-h2') }}
        </h2>
        <p
          w="md:40%"
          p="4 md:0"
          text=" md:6"
          border="~ white md:0"
        >
          {{ $t('home-banner-p') }}
        </p>
      </div>
    </Banner>
    <Container>
      <template #headerRight>
        <a class="text-14px md:text-16px" href="javascript:;">
          {{ $t('home-card-title-a') }}
        </a>
      </template>
      <div flex="~ wrap sm:gap-4%">
        <template v-for="item in cardList" :key="item.id">
          <CardItem
            :title="$t(item.title)"
            :icon="item.icon"
            :description="$t(item.description)"
            :detail="$t(item.detail)"
          />
        </template>
      </div>
    </Container>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('~/assets/images/home-banner.webp');
}
</style>
