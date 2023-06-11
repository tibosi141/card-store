import wechatPayPng from '~/assets/images/product/wechat-pay.png'
import alipayPayPng from '~/assets/images/product/alipay-pay.png'

interface PayMode {
  value: string
  label: string
}

export const usePay = () => {
  const { t } = useI18n()
  const router = useRouter()
  const { dialog } = useGlobalConfig()
  const pay = reactive({
    mode: '',
    state: false,
  })

  const payErCode = computed(() => {
    if (pay.mode === 'global.contact.wechat') return wechatPayPng
    else if (pay.mode === 'global.contact.alipay') return alipayPayPng
    else return ''
  })

  const payModeList = computed<PayMode[]>(() => [
    {
      value: 'global.contact.wechat',
      label: 'global.contact.wechat',
    },
    {
      value: 'global.contact.alipay',
      label: 'global.contact.alipay',
    },
  ])

  function handlePay() {
    setTimeout(() => {
      pay.state = true
      dialog?.success({
        title: t('product.pay.success.title'),
        content: t('product.pay.success.content'),
        positiveText: t('global.dialog.btn.confirm'),
        negativeText: t('global.dialog.btn.cancle'),
        onAfterLeave: () => {
          pay.state = false
        },
        onPositiveClick: () => {
          router
            .push('/active')
            .then(() => {})
            .catch(() => {})
        },
      })
    }, 2000)
  }

  return {
    pay,
    payErCode,
    payModeList,
    handlePay,
  }
}
