import type { IncludeNull } from '~/utils/types'

export const userLoginUrl = '/user/login'
export const userSendCodeUrl = '/user/send-code'
export const userRegisterUrl = '/user/register/'

export interface UserLoginParams {
  username: IncludeNull<string>
  password: IncludeNull<string>
  rememberMe?: boolean
}

export interface UserLoginResult {
  token: string
}

export type UserSendCodeParams = Pick<UserRegisterParams, 'email'>

export interface UserRegisterParams {
  username: IncludeNull<string>
  password: IncludeNull<string>
  confirmPassword: IncludeNull<string>
  email: IncludeNull<string>
  code: IncludeNull<string>
}

export type UserRegisterResult = Pick<any, string>

export function userLoginApi(params: UserLoginParams) {
  return usePost<UserLoginParams, UserLoginResult>(userLoginUrl, params)
}

export function userSendCodeApi(params: UserSendCodeParams) {
  return usePost<UserSendCodeParams, any>(userSendCodeUrl, params)
}

export function userRegisterApi(params: UserRegisterParams) {
  return usePost<UserRegisterParams, UserRegisterResult>(
    userRegisterUrl,
    params,
  )
}
