import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'
import i18n from '~/locale'
import router from '~/router'

export interface ResponseBody<T = any> {
  code: number
  data?: T
  page?: T
  msg: string
}

const instance = axios.create({
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_APP_BASE_API : '/',
  timeout: 6000,
})

const requestHandler = async (
  config: InternalAxiosRequestConfig,
): Promise<InternalAxiosRequestConfig> => {
  const token = useAuthorization()

  if (token.value) config.headers[STORE_AUTHORIZE_KEY] = token.value

  return config
}

const responseIsError = (res: any) => {
  switch (typeof res) {
    case 'boolean':
      if (!res) return true
      break
    case 'string':
      if (res !== 'success') return true
      break
    case 'object':
      if (res.msg !== 'success') return true
      break
    default:
      return false
  }
}

const responseHandler = (
  response: AxiosResponse,
): ResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  const data = response.data
  const flag = responseIsError(data)
  if (flag) {
    const { message } = useGlobalConfig()
    data.msg && message?.error(data.msg)
    return Promise.reject(data)
  }

  return response.data
}

const errorHandler = (error: AxiosError): Promise<any> => {
  // 判断是否存在response
  if (error.response) {
    const { notification } = useGlobalConfig()
    const { status, statusText, data } = error.response as AxiosResponse<any>

    if (status === 401) {
      const token = useAuthorization()

      notification?.error({
        title: i18n.global.t('global.request.error.401'),
        content: data?.msg || statusText,
        duration: 3000,
      })

      token.value = null
      router
        .replace({
          path: '/login',
          query: {
            redirect: router.currentRoute.value.path,
          },
        })
        .then(() => {})
    }
    else if (status === 403) {
      notification?.error({
        title: i18n.global.t('global.request.error.403'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else if (status === 500) {
      notification?.error({
        title: i18n.global.t('global.request.error.500'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else {
      notification?.error({
        title: i18n.global.t('global.request.error.other'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
  }

  return Promise.reject(error)
}

instance.interceptors.request.use(requestHandler)
instance.interceptors.response.use(responseHandler, errorHandler)

export default instance

export const useGet = <P = any, R = any>(
  url: string,
  params?: P,
  config?: AxiosRequestConfig,
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'GET',
    params,
    ...config,
  })
}

export const usePost = <P = any, R = any>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig,
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'POST',
    data,
    ...config,
  })
}

export const usePut = <P = any, R = any>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig,
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'PUT',
    data,
    ...config,
  })
}

export const useDelete = <P = any, R = any>(
  url: string,
  data?: P,
  config?: AxiosRequestConfig,
): Promise<ResponseBody<R>> => {
  return instance.request({
    url,
    method: 'Delete',
    data,
    ...config,
  })
}
