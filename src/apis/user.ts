import type { IncludeNull } from '~/utils/types'

export interface UserInfo {
  id: number
  userName: string
  nickname?: string
  avatar?: string
  email?: string
  mobile?: string
  signature?: string
  gender?: number
  realName?: string
  birthday?: string
  money?: number
  createTime?: number
  ip?: string
  password?: string
}

export const userRegisterUrl = '/user/registerUser'
export const userSendCodeUrl = '/user/check_yzm'
export const userLoginUrl = '/user/userLogin'
export const userForgetPasswordUrl = '/user/retrPass'
export const userGetInfoUrl = '/user/getInfo/'
export const userLogoutUrl = '/user/user_logout'

export interface UserRegisterParams {
  userName: IncludeNull<string>
  password: IncludeNull<string>
  confirmPassword: IncludeNull<string>
  email: IncludeNull<string>
  code: IncludeNull<string>
}

export type UserRegisterResult = Pick<any, string>

export interface UserLoginParams {
  email: IncludeNull<string>
  password: IncludeNull<string>
  rememberMe?: boolean
}

export interface UserLoginResult {
  id: number
  token: string
}

export type UserSendCodeParams = Pick<UserRegisterParams, 'email'>

export function userRegisterApi(params: UserRegisterParams) {
  return usePost<UserRegisterParams, UserRegisterResult>(
    userRegisterUrl,
    params,
  )
}

export function userSendCodeApi(params: UserSendCodeParams) {
  return usePost<UserSendCodeParams, any>(userSendCodeUrl, params)
}

export function userLoginApi(params: UserLoginParams) {
  return usePost<UserLoginParams, UserLoginResult>(userLoginUrl, params)
}

export function userForgetPasswordApi(params: UserSendCodeParams) {
  return usePost<UserSendCodeParams, any>(userForgetPasswordUrl, params)
}

export function userGetInfoApi(params: string) {
  return useGet<string, UserInfo>(userGetInfoUrl + params)
}

export function userLogoutApi() {
  return usePost(userLogoutUrl)
}
