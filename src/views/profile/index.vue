<script setup lang="ts">
import {
  ApiFilled,
  EnvironmentFilled,
  IdcardFilled,
  LockFilled,
} from '@vicons/antd'
import type { CardProps, DescriptionsProps, TagProps } from 'naive-ui'
import { useDevice } from './composables/device'

const userStore = useUserStore()
const { userInfo } = toRefs(userStore)
const { isDesktop, isMobile } = useQueryBreakpoints()
const { dLoading, deviceInfo, tagType, getDeviceList } = useDevice()

const cardSize = ref<CardProps['size']>('medium')
const tagSize = ref<TagProps['size']>('large')
const descriptionSize = ref<DescriptionsProps['size']>('medium')

watch(
  isMobile,
  (newVal) => {
    if (newVal) {
      cardSize.value = 'small'
      tagSize.value = 'medium'
      descriptionSize.value = 'small'
    }
    else {
      cardSize.value = 'medium'
      tagSize.value = 'large'
      descriptionSize.value = 'medium'
    }
  },
  {
    immediate: true,
  },
)

getDeviceList()
</script>

<template>
  <div p="x-4 t-16 b-12 sm:x-8 md:x-10% md:t-18">
    <n-h2 class="text-center my-10!">
      {{ $t('global.user.center') }}
    </n-h2>
    <div flex="~ col justify-between md:row gap-20%">
      <div class="mb-12 flex-1">
        <n-divider
          v-if="isDesktop"
          title-placement="center"
          class="text-xl!"
        >
          {{ $t('profile.user-info.title') }}
        </n-divider>
        <n-h3
          v-else
          prefix="bar"
          type="warning"
        >
          {{ $t('profile.user-info.title') }}
        </n-h3>
        <n-image
          width="80"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
        <p m="t-8">
          {{ `${$t('login.username.placeholder')}：${userInfo?.userName}` }}
        </p>
      </div>
      <div class="flex-1">
        <n-divider
          v-if="isDesktop"
          title-placement="center"
          class="text-xl!"
        >
          {{ $t('profile.device-info.title') }}
        </n-divider>
        <n-h3
          v-else
          prefix="bar"
          type="warning"
        >
          {{ $t('profile.device-info.title') }}
        </n-h3>
        <n-spin :show="dLoading">
          <n-card
            :size="cardSize"
            :title="deviceInfo?.type"
            hoverable
            :segmented="{
              content: true,
              footer: 'soft',
            }"
          >
            <template #header>
              <n-tag :size="tagSize" :type="tagType">
                {{ `${deviceInfo?.type}会员` }}
              </n-tag>
            </template>
            <template #header-extra>
              <span
                text="10 sm:16 md:8"
                :class="`i-flagpack-${deviceInfo?.ico}`"
              />
            </template>
            <n-descriptions
              :size="descriptionSize"
              bordered
              label-placement="left"
              :columns="1"
              :label-style="{
                width: '10rem',
              }"
            >
              <n-descriptions-item :content-style="{ textAlign: 'center' }">
                <template #label>
                  <n-icon>
                    <EnvironmentFilled />
                  </n-icon>
                  IP
                </template>
                {{ deviceInfo?.devIp }}
              </n-descriptions-item>
              <n-descriptions-item :content-style="{ textAlign: 'center' }">
                <template #label>
                  <n-icon>
                    <ApiFilled />
                  </n-icon>
                  {{ $t('home-card-item-port') }}
                </template>
                {{ deviceInfo?.devPort }}
              </n-descriptions-item>
              <n-descriptions-item :content-style="{ textAlign: 'center' }">
                <template #label>
                  <n-icon>
                    <IdcardFilled />
                  </n-icon>
                  {{ $t('home-card-item-username') }}
                </template>
                {{ deviceInfo?.account }}
              </n-descriptions-item>
              <n-descriptions-item :content-style="{ textAlign: 'center' }">
                <template #label>
                  <n-icon>
                    <LockFilled />
                  </n-icon>
                  {{ $t('home-card-item-password') }}
                </template>
                {{ deviceInfo?.password }}
              </n-descriptions-item>
            </n-descriptions>
            <template #footer>
              <p text="xl md:4">
                <span>{{ $t('profile.device-info.end-time') }}：</span>
                <n-time
                  :time="deviceInfo?.endTime"
                  format="yyyy-MM-dd hh:mm:ss"
                />
              </p>
            </template>
          </n-card>
        </n-spin>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
