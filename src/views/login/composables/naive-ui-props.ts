import type { Size } from 'naive-ui/es/form/src/interface'
import type { TabsType } from 'naive-ui/es/tabs/src/interface'

export type TabName = 'login' | 'register'

export const useNaiveUIProps = () => {
  const { isMobile, isPad, isDesktop } = useQueryBreakpoints()

  const tabName = ref<TabName>('login')
  const tabType = ref<TabsType>('bar')
  const formSize = ref<Size>('large')

  watchEffect(() => {
    if (isDesktop.value) {
      formSize.value = 'large'
    }
    else if (isPad.value) {
      tabType.value = 'bar'
      formSize.value = 'medium'
    }
    else if (isMobile.value) {
      tabType.value = 'line'
      formSize.value = 'medium'
    }
  })

  return {
    tabType,
    tabName,
    formSize,
  }
}
