<script setup lang="ts"></script>

<template>
  <section
    md="mb-12 px-10%"
    sm="mt-6 px-4%"
    class="mb-4 px-6"
  >
    <h4 class="py-8 flex justify-between text-xl">
      <span class="text-6 font-bold">{{ $t('home-card-title-span') }}</span>
      <a
        md="text-4"
        class="text-xl"
        href="javascript:;"
      >
        {{ $t('home-card-title-a') }}
      </a>
    </h4>
    <div sm="gap-4%" class="flex flex-wrap">
      <section
        md="w-22% mb-0"
        sm="w-48% mb-4%"
        class="box-border mb-4% p-6 bg-#262626 shadow-xl duration-250 hover:translate-y--1 hover:shadow-#1e293b"
      >
        <h5 md="text-6" class="text-6">
          {{ $t('home-card-item-cn-title') }}
        </h5>
        <figure
          md="w-13 mx-0"
          sm="w-18 mx-auto my-6"
          class="w-14 my-4 overflow-hidden "
        >
          <img class="w-full duration-250 hover:scale-120" src="@/assets/images/cards/cn.png">
        </figure>
        <div>
          <p
            md="text-left"
            sm="my-4 text-center"
            class="my-2 text-xl"
          >
            {{ $t('home-card-item-cn-desc') }}
          </p>
          <p
            md="px-0"
            sm="my-4 px-1%"
            class="text-4 text-gray"
          >
            {{ $t('home-card-item-cn-detail') }}
          </p>
        </div>
      </section>
      <section
        md="w-22% mb-0 shadow-xl"
        sm="w-48% mb-4%"
        class="box-border mb-4% p-6 bg-#262626 shadow-md duration-250 hover:translate-y--1 hover:shadow-#0f172a"
      >
        <h5 md="text-6" class="text-6">
          {{ $t('home-card-item-jp-title') }}
        </h5>
        <figure
          md="w-13 mx-0"
          sm="w-18 mx-auto  my-6"
          class="w-14 my-4"
        >
          <img class="w-full" src="@/assets/images/cards/jp.png">
        </figure>
        <div>
          <p
            md="text-left"
            sm="my-4 text-center"
            class="my-2 text-xl"
          >
            {{ $t('home-card-item-jp-desc') }}
          </p>
          <p
            md="px-0"
            sm="my-4 px-1%"
            class="text-4 text-gray"
          >
            {{ $t('home-card-item-jp-detail') }}
          </p>
        </div>
      </section>
      <section
        md="w-22% mb-0"
        sm="w-48% mb-4%"
        class="box-border mb-4% p-6 bg-#262626 shadow-xl duration-250 hover:translate-y--1 hover:shadow-#0f172a"
      >
        <h5 md="text-6" class="text-6">
          {{ $t('home-card-item-kr-title') }}
        </h5>
        <figure
          md="w-13 mx-0"
          sm="w-18 mx-auto  my-6"
          class="w-14 my-4"
        >
          <img class="w-full" src="@/assets/images/cards/kr.png">
        </figure>
        <div>
          <p
            md="text-left"
            sm="my-4 text-center"
            class="my-2 text-xl"
          >
            {{ $t('home-card-item-kr-desc') }}
          </p>
          <p
            md="px-0"
            sm="my-4 px-1%"
            class="text-4 text-gray"
          >
            {{ $t('home-card-item-kr-detail') }}
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped></style>
