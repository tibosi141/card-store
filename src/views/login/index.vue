<script setup lang="ts">
import {
  LockOutlined,
  MailOutlined,
  MessageOutlined,
  UserOutlined,
} from '@vicons/antd'
import { useLogin } from './composables/login'
import { useRegister } from './composables/register'
import { BlankLayout } from '~/layout'

const { lForm, lLoading, lModel, lRules, login } = useLogin()
const {
  tabName,
  rForm,
  password,
  rLoading,
  counter,
  countState,
  registerState,
  rModel,
  rRules,
  onSwitchTab,
  handlePasswordInput,
  sendCode,
  register,
} = useRegister()

watch(registerState, (newVal) => {
  console.log(newVal)
  if (!newVal) return

  lModel.username = 'admin'
  lModel.password = '123456'
})
</script>

<template>
  <BlankLayout>
    <div
      md="hidden"
      mb="30px sm:20px"
      pb="40px sm:0"
      border="b-1 b-white/9 sm:0"
      flex="~ items-center justify-around sm:justify-center"
    >
      <img
        class="w-12 h-12"
        src="@/assets/vue.svg"
        alt=""
      >
      <p m="sm:l-8" text="white 8">
        {{ $t('global.header.title') }}
      </p>
    </div>
    <n-tabs
      size="large"
      :value="tabName"
      justify-content="space-evenly"
    >
      <n-tab-pane name="login">
        <template #tab>
          <div text="16px md:18px" @click="onSwitchTab('login')">
            {{ $t('login.login.tab') }}
          </div>
        </template>
        <n-form
          ref="lForm"
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
          {{ $t('login.login.tab') }}
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="register">
        <template #tab>
          <div text="16px md:18px" @click="onSwitchTab('register')">
            {{ $t('login.register.tab') }}
          </div>
        </template>
        <n-form
          ref="rForm"
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
              :placeholder="$t('register.password.confirm.placeholder')"
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
                  countState && counter !== 120
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
          {{ $t('login.register.tab') }}
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </BlankLayout>
</template>

<style scoped></style>
