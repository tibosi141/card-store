<script setup lang="ts">
import Container from './container.vue'
import CardItem from './card-item.vue'
import { useCardList } from './composables/card-list'

const { cardList, getCardList } = useCardList()

getCardList()
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
    <Container>
      <template #headerRight>
        <a class="text-14px md:text-16px" href="javascript:;">
          {{ $t('home-card-title-a') }}
        </a>
      </template>
      <div flex="~ wrap sm:gap-4%">
        <template v-for="item in cardList" :key="item.id">
          <CardItem
            :title="item.title"
            :icon="item.icon"
            :description="item.description"
            :detail="item.detail"
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
