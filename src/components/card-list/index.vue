<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <section mt="8px sm:12px md:14px" px="20px sm:4% md:10%">
    <h4
      py="14px sm:20px md:26px"
      flex="~ justify-between"
    >
      <span text="18px sm:20px md-22px" font="bold">
        {{ $t('home-card-title-span') }}
      </span>
      <a
        md="text-16px"
        class="text-14px"
        href="javascript:;"
      >
        {{ $t('home-card-title-a') }}
      </a>
    </h4>
    <div sm="gap-4%" class="flex flex-wrap">
      <template v-for="item in data" :key="item">
        <section
          w="100% sm:48% md:22%"
          mb="20px sm:4%"
          p="16px sm:20px md:24px"
          class="box-border bg-#262626 duration-250"
          hover="translate-y--2px shadow-xl shadow-#1e293b"
        >
          <h5 text="16px sm:18px md:20px">
            {{ $t(`home-card-item-${item}-title`) }}
          </h5>
          <figure
            w="sm:16"
            mx="sm:auto md:0"
            my="14px sm:20px"
          >
            <span text="12 sm:16 md:10" :class="[`i-flagpack-${item}`]" />
          </figure>
          <div>
            <p mt="6px sm:10px md:6px" text="14px sm:16px sm:center md:left">
              {{ $t(`home-card-item-${item}-desc`) }}
            </p>
            <p mt="6px sm:8px md:4px" text="12px gray sm:14px">
              {{ $t(`home-card-item-${item}-detail`) }}
            </p>
          </div>
        </section>
      </template>
    </div>
  </section>
</template>

<style scoped></style>
