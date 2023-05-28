import type { IncludeNull } from '~/utils/types'

export interface UserInfo {
  id: number
  username: string
  nickname?: string
  avatar?: string
  email?: string
  mobile?: string
  signature?: string
  gender?: number
  realName?: string
  birthday?: string
  money?: number
}

export const userLoginUrl = '/user/login'
export const userSendCodeUrl = '/user/send-code'
export const userRegisterUrl = '/user/register/'
export const userGetInfoUrl = '/user/info'

export interface UserRegisterParams {
  username: IncludeNull<string>
  password: IncludeNull<string>
  confirmPassword: IncludeNull<string>
  email: IncludeNull<string>
  code: IncludeNull<string>
}

export type UserRegisterResult = Pick<any, string>

export interface UserLoginParams {
  username: IncludeNull<string>
  password: IncludeNull<string>
  rememberMe?: boolean
}

export interface UserLoginResult {
  token: string
}

export type UserSendCodeParams = Pick<UserRegisterParams, 'email'>

export function userSendCodeApi(params: UserSendCodeParams) {
  return usePost<UserSendCodeParams, any>(userSendCodeUrl, params)
}

export function userRegisterApi(params: UserRegisterParams) {
  return usePost<UserRegisterParams, UserRegisterResult>(
    userRegisterUrl,
    params,
  )
}

export function userLoginApi(params: UserLoginParams) {
  return usePost<UserLoginParams, UserLoginResult>(userLoginUrl, params)
}

export function userGetInfoApi() {
  return useGet<any, UserInfo>(userGetInfoUrl)
}
