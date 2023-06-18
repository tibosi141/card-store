import type { IncludeNull } from '~/utils/types'

export interface UserInfo {
  id: number
  code?: string
  userName: string
  avatar?: string
  email?: string
  createTime?: number
  ip?: string
  password?: string
  resource?: string
}

export const userRegisterUrl = '/user/registerUser'
export const userSendCodeUrl = '/user/check_yzm'
export const userLoginUrl = '/user/userLogin'
export const userResetPasswordUrl = '/user/retrPass'
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

export type UserResetPassParams = Pick<UserRegisterParams, 'email' | 'password'>

export const userRegisterApi = (params: UserRegisterParams) => {
  return usePost<UserRegisterParams, UserRegisterResult>(
    userRegisterUrl,
    params,
  )
}

export const userSendCodeApi = (params: UserSendCodeParams) => {
  return usePost<UserSendCodeParams, any>(userSendCodeUrl, params)
}

export const userLoginApi = (params: UserLoginParams) => {
  return usePost<UserLoginParams, UserLoginResult>(userLoginUrl, params)
}

export const userResetPasswordApi = (params: UserResetPassParams) => {
  return usePost<UserResetPassParams, any>(userResetPasswordUrl, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

export const userGetInfoApi = (params: string) => {
  return useGet<string, UserInfo>(userGetInfoUrl + params)
}

export const userLogoutApi = () => {
  return usePost(userLogoutUrl)
}
