<script setup lang="ts">
import Dropdown from './drop-down.vue'
import type { Navigation } from '~/stores/app'

defineProps<{
  open?: boolean
  navigations?: Navigation[]
}>()
defineEmits(['click'])
</script>

<template>
  <ul
    md="~ px-0 py-0 flex gap-12 justify-center divide-y-0"
    class="px-6 py-4 divide-gray divide-y"
  >
    <li
      v-for="item in navigations"
      :key="item.label"
      md="~ py-0 text-4 lh-10 transform-none"
      class="px-6 text-xl lh-20 cursor-pointer duration-250 hover:text-gray-300"
      :class="[
        item.path === $route.path ? 'text-gray-300' : 'text-gray',
        open ? 'transform-none ' : 'translate-x--8',
      ]"
    >
      <template v-if="item.type === 'link'">
        <router-link
          class="block"
          :to="item.path"
          @click="$emit('click')"
        >
          {{ item.label }}
        </router-link>
      </template>
      <template v-else>
        <Dropdown :text="item.label">
          <div>
            <img
              md="w-18 h-18"
              class="w-26 h-26 mx-auto"
              src="@/assets/images/ercode.jpg"
            >
          </div>
          <div
            md="mt-4 gap-4 text-left"
            class="flex flex-col justify-around font-300 text-right"
          >
            <p class="lh-4 whitespace-nowrap">
              <span>{{ $t('global.header.qq') }}</span>
              <span>: 8208208820</span>
            </p>
            <p class="lh-4 whitespace-nowrap">
              <span>{{ $t('global.header.wechat') }}</span>
              <span>: 18639396666</span>
            </p>
          </div>
        </Dropdown>
      </template>
    </li>
  </ul>
</template>

<style scoped></style>
