import type { ButtonProps } from 'naive-ui'
import type { Size } from 'naive-ui/es/form/src/interface'
import type { TabsType } from 'naive-ui/es/tabs/src/interface'

export type TabName = 'login' | 'register'

export const useNaiveUIProps = () => {
  const { isMobile, isPad, isDesktop } = useQueryBreakpoints()

  const tabName = ref<TabName>('login')
  const tabType = ref<TabsType>('bar')
  const formSize = ref<Size>('large')
  const buttonSize = ref<ButtonProps['size']>('medium')

  watchEffect(() => {
    if (isDesktop.value) {
      formSize.value = 'large'
      buttonSize.value = 'medium'
    }
    else {
      formSize.value = 'medium'
      buttonSize.value = 'small'
    }

    if (isPad.value)
      tabType.value = 'bar'

    if (isMobile.value)
      tabType.value = 'line'
  })

  return {
    tabType,
    tabName,
    formSize,
    buttonSize,
  }
}
