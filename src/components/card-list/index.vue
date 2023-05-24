<script setup lang="ts">
defineProps<{
  cardList: string[]
}>()
</script>

<template>
  <section m="t-8px sm:t-12px md:t-14px" p="x-20px sm:x-4% md:x-10%">
    <h4 p="y-14px sm:y-20px md:y-26px" flex="~ justify-between">
      <span text="18px sm:20px md-22px" font="bold">
        {{ $t('home-card-title-span') }}
      </span>
      <a text="14px md:16px" href="javascript:;">
        {{ $t('home-card-title-a') }}
      </a>
    </h4>
    <div flex="~ wrap sm:gap-4%">
      <template v-for="item in cardList" :key="item">
        <section
          w="100% sm:48% md:22%"
          m="b-20px sm:b-4%"
          p="16px sm:20px md:24px"
          class="box-border bg-#262626 duration-250"
          hover="translate-y--2px shadow-xl shadow-#1e293b"
        >
          <h5 text="16px sm:18px md:20px">
            {{ $t(`home-card-item-${item}-title`) }}
          </h5>
          <figure w="sm:16" m="y-14px sm:x-auto sm:y-20px md:x-0">
            <span text="12 sm:16 md:10" :class="[`i-flagpack-${item}`]" />
          </figure>
          <div>
            <p
              m="t-6px sm:t-10px md:t-6px"
              text="14px sm:16px sm:center md:left"
            >
              {{ $t(`home-card-item-${item}-desc`) }}
            </p>
            <p m="t-6px sm:t-8px md:t-4px" text="12px gray sm:14px">
              {{ $t(`home-card-item-${item}-detail`) }}
            </p>
          </div>
        </section>
      </template>
    </div>
  </section>
</template>

<style scoped></style>
