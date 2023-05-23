import type { IncludeNull } from '~/utils/types'

export interface UserLoginParams {
  username: IncludeNull<string>
  password: IncludeNull<string>
  rememberMe?: boolean
}

export interface UserRegisterParams {
  username: IncludeNull<string>
  password: IncludeNull<string>
  confirmPassword: IncludeNull<string>
  email: IncludeNull<string>
  code: IncludeNull<string>
}
