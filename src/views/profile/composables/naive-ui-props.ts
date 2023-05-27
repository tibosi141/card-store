import type { CardProps, SpaceProps } from 'naive-ui'

export function useNaiveUIProps() {
  const { isDesktop } = useQueryBreakpoints()

  const vertical = ref(false)
  const spaceSize = ref<SpaceProps['size']>(45)
  const cardSize = ref<CardProps['size']>('medium')

  watch(
    isDesktop,
    (newVal) => {
      if (newVal) {
        vertical.value = false
        spaceSize.value = 45
        cardSize.value = 'medium'
      }
      else {
        vertical.value = true
        spaceSize.value = 'large'
        cardSize.value = 'small'
      }
    },
    {
      immediate: true,
    },
  )

  return {
    vertical,
    spaceSize,
    cardSize,
  }
}
