<script setup lang="ts">
import Dropdown from './DropDown.vue'
import type { NavigationInfo } from '~/stores/app'

defineProps<{
  open?: boolean
  navigations?: NavigationInfo[]
}>()
defineEmits(['click'])
</script>

<template>
  <ul
    md="p-0 flex gap-12 justify-center divide-y-0"
    sm="px-4%"
    class="p-4 divide-y divide-gray"
  >
    <li
      v-for="item in navigations"
      :key="item.path"
      md="px-0 text-4 lh-8 transform-none"
      class="cursor-pointer px-4 text-xl lh-20 transition-transform duration-250 hover:text-gray-300"
      :class="[
        item.path === $route.path ? 'text-gray-300' : 'text-gray',
        open ? 'transform-none ' : 'translate-x--8',
      ]"
    >
      <template v-if="item.type === 'link'">
        <router-link
          md="px-4"
          block="~"
          :to="item.path"
          @click="$emit('click')"
        >
          {{ $t(item.label) }}
        </router-link>
      </template>
      <template v-else>
        <Dropdown :text="$t(item.label)">
          <div
            w="full"
            h="120px md:auto"
            flex="~ col wrap items-center justify-evenly md:row md:justify-between"
            text="left"
            font="300"
          >
            <p
              w="20% md:auto"
              m="md:b-6"
              class="whitespace-nowrap lh-5"
            >
              <span>{{ $t('global.contact.qq') }}</span>
              <span>: 8208208820</span>
            </p>
            <p w="20% md:auto" class="whitespace-nowrap lh-5">
              {{ $t('global.contact.wechat') }}
              <span md="hidden">→</span>
            </p>
            <div
              w="80% md:auto"
              h="full md:auto"
              flex="~ items-center justify-end"
            >
              <img
                w="26 md:18"
                h="26 md:18"
                src="@/assets/images/ercode.jpg"
              >
            </div>
          </div>
        </Dropdown>
      </template>
    </li>
  </ul>
</template>

<style scoped></style>
