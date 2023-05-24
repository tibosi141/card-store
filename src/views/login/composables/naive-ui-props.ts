import type { Size } from 'naive-ui/es/form/src/interface'
import type { TabsType } from 'naive-ui/es/tabs/src/interface'

export type TabName = 'login' | 'register'

export const useNaiveUIProps = () => {
  const tabName = ref<TabName>('login')
  const tabType = ref<TabsType>('bar')
  const formSize = ref<Size>('large')

  return {
    tabType,
    tabName,
    formSize,
  }
}
