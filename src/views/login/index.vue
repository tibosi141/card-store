<script setup lang="ts">
import {
  LockOutlined,
  MailOutlined,
  MessageOutlined,
  UserOutlined,
} from '@vicons/antd'
import { useNaiveUIProps } from './composables/naive-ui-props'
import { useLogin } from './composables/login'
import { useForgetPassword } from './composables/forget-password'
import { useRegister } from './composables/register'
import { BlankLayout } from '~/layout'

const { tabName, tabType, formSize, buttonSize } = useNaiveUIProps()
const { lForm, lLoading, lModel, lRules, login } = useLogin()
const { show, fForm, fLoading, fModel, fRules, toggleSwitch, sendEmail }
  = useForgetPassword()
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
    const { email, password } = rModel

    tabName.value = 'login'
    lModel.email = email
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
        class="h-12 w-12"
        src="@/assets/vue.svg"
        alt=""
        @click="$router.push('/')"
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
          <n-form-item-row path="userName">
            <n-input
              v-model:value="lModel.email"
              :placeholder="$t('register.email.placeholder')"
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
              <span
                class="cursor-pointer text-[var(--primary-color)]"
                @click="toggleSwitch(true)"
              >
                {{ $t('login.forget-password') }}
              </span>
            </div>
          </n-form-item-row>
        </n-form>
        <n-button
          type="primary"
          secondary
          strong
          block
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
          <n-form-item-row path="userName">
            <n-input
              v-model:value="rModel.userName"
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
          secondary
          strong
          block
          :loading="rLoading"
          @click="register"
        >
          {{ $t('login.tabs.register') }}
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </BlankLayout>
  <n-modal
    v-model:show="show"
    style="width: 30rem"
    preset="card"
    :title="$t('login.reset-password')"
    :bordered="false"
    :size="formSize"
  >
    <n-form
      ref="fForm"
      :model="fModel"
      :rules="fRules"
      :size="formSize"
      label-align="left"
      label-placement="left"
    >
      <n-form-item-row :label="$t('register.email.placeholder')" path="email">
        <n-input
          v-model:value="fModel.email"
          :placeholder="$t('register.email.placeholder')"
        />
      </n-form-item-row>
    </n-form>
    <template #footer>
      <n-space justify="end" size="large">
        <n-button :size="buttonSize" @click="toggleSwitch(false)">
          {{ $t('global.dialog.btn.cancle') }}
        </n-button>
        <n-button
          :loading="fLoading"
          :size="buttonSize"
          type="primary"
          @click="sendEmail"
        >
          {{ $t('global.dialog.btn.confirm') }}
        </n-button>
      </n-space>
    </template>
  </n-modal>
</template>

<style scoped></style>
