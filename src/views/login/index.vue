<script setup lang="ts">
import {
  LockOutlined,
  MailOutlined,
  MessageOutlined,
  UserOutlined,
} from '@vicons/antd'
import { useNaiveUIProps } from './composables/naive-ui-props'
import { useLogin } from './composables/login'
import { useRegister } from './composables/register'
import { BlankLayout } from '~/layout'

const { tabName, tabType, formSize } = useNaiveUIProps()
const { lForm, lLoading, lModel, lRules, login } = useLogin()
const {
  rForm,
  password,
  rLoading,
  counter,
  countState,
  registerState,
  rModel,
  rRules,
  handlePasswordInput,
  sendCode,
  register,
} = useRegister()

watch(registerState, (newVal) => {
  if (newVal) {
    const { username, password } = rModel

    tabName.value = 'login'
    lModel.username = username
    lModel.password = password
  }
})
</script>

<template>
  <BlankLayout>
    <div
      md="hidden"
      m="b-60px sm:b-20px"
      flex="~ items-center justify-center sm:justify-center"
    >
      <img
        class="w-12 h-12"
        src="@/assets/vue.svg"
        alt=""
      >
    </div>
    <n-tabs
      size="large"
      :type="tabType"
      :value="tabName"
      justify-content="space-evenly"
    >
      <n-tab-pane name="login">
        <template #tab>
          <div
            m="md:b-10px"
            text="16px md:18px"
            @click="tabName = 'login'"
          >
            {{ $t('login.tabs.login') }}
          </div>
        </template>
        <n-form
          ref="lForm"
          :size="formSize"
          :model="lModel"
          :rules="lRules"
          label-align="left"
          label-placement="left"
        >
          <n-form-item-row path="username">
            <n-input
              v-model:value="lModel.username"
              :placeholder="$t('login.username.placeholder')"
            >
              <template #prefix>
                <n-icon :component="UserOutlined" />
              </template>
            </n-input>
          </n-form-item-row>
          <n-form-item-row path="password">
            <n-input
              v-model:value="lModel.password"
              type="password"
              show-password-on="click"
              :placeholder="$t('login.password.placeholder')"
            >
              <template #prefix>
                <n-icon :component="LockOutlined" />
              </template>
            </n-input>
          </n-form-item-row>
          <n-form-item-row>
            <div class="w-100% flex items-center justify-between">
              <n-checkbox v-model:checked="lModel.rememberMe">
                {{ $t('login.remember-me') }}
              </n-checkbox>
              <a class="cursor-pointer text-[var(--primary-color)]">
                {{ $t('login.forgot-password') }}
              </a>
            </div>
          </n-form-item-row>
        </n-form>
        <n-button
          type="primary"
          block
          secondary
          strong
          :loading="lLoading"
          @click="login"
        >
          {{ $t('login.tabs.login') }}
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="register">
        <template #tab>
          <div
            m="md:b-10px"
            text="16px md:18px"
            @click="tabName = 'register'"
          >
            {{ $t('login.tabs.register') }}
          </div>
        </template>
        <n-form
          ref="rForm"
          :size="formSize"
          :model="rModel"
          :rules="rRules"
          label-align="left"
          label-placement="left"
        >
          <n-form-item-row path="username">
            <n-input
              v-model:value="rModel.username"
              :placeholder="$t('login.username.placeholder')"
            >
              <template #prefix>
                <n-icon :component="UserOutlined" />
              </template>
            </n-input>
          </n-form-item-row>
          <n-form-item-row path="password">
            <n-input
              v-model:value="rModel.password"
              type="password"
              show-password-on="click"
              :placeholder="$t('login.password.placeholder')"
              @input="handlePasswordInput"
            >
              <template #prefix>
                <n-icon :component="LockOutlined" />
              </template>
            </n-input>
          </n-form-item-row>
          <n-form-item-row ref="password" path="confirmPassword">
            <n-input
              v-model:value="rModel.confirmPassword"
              type="password"
              show-password-on="click"
              :placeholder="$t('register.confirm.password.placeholder')"
            >
              <template #prefix>
                <n-icon :component="LockOutlined" />
              </template>
            </n-input>
          </n-form-item-row>
          <n-form-item-row path="email">
            <n-input-group>
              <n-input
                v-model:value="rModel.email"
                :placeholder="$t('register.email.placeholder')"
              >
                <template #prefix>
                  <n-icon :component="MailOutlined" />
                </template>
              </n-input>
              <n-button
                type="primary"
                ghost
                :disabled="countState"
                @click="sendCode"
              >
                {{
                  countState
                    ? `${counter}${$t('register.verification-code.resend')}`
                    : $t('register.verification-code.get-verification-code')
                }}
              </n-button>
            </n-input-group>
          </n-form-item-row>
          <n-form-item-row path="code">
            <n-input
              v-model:value="rModel.code"
              :placeholder="$t('register.verification-code.placeholder')"
            >
              <template #prefix>
                <n-icon :component="MessageOutlined" />
              </template>
            </n-input>
          </n-form-item-row>
        </n-form>
        <n-button
          type="primary"
          block
          secondary
          strong
          :loading="rLoading"
          @click="register"
        >
          {{ $t('login.tabs.register') }}
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </BlankLayout>
</template>

<style scoped></style>
