import { merge } from 'lodash-es'

interface GlobalConfigType {
  message?: ReturnType<typeof useMessage>
  dialog?: ReturnType<typeof useDialog>
  notification?: ReturnType<typeof useNotification>
  loadingBar?: ReturnType<typeof useLoadingBar>
}

const globalConfig: GlobalConfigType = {}

export function useGlobalConfig() {
  return globalConfig
}

export function useGlobalConfigProvider(config: GlobalConfigType) {
  merge(globalConfig, config)
}
