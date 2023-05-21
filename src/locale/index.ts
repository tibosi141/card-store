import { createI18n } from 'vue-i18n'
import zhCN from './lang/zh-CN'

export const defaultLocale = 'zh-CN'

const i18n = createI18n({
  legacy: false,
  missingWarn: 'false',
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: {
    'zh-CN': zhCN,
  },
})

export const loadLanguageAsync = async (locale: string = defaultLocale) => {
  const currentLang = i18n.global.locale.value

  try {
    if (currentLang === locale) return nextTick()

    const message = await import(`./lang/${locale}.ts`)
    message && i18n.global.setLocaleMessage(locale, message.default)
  }
  catch (err) {
    console.warn('load language error', err)
  }

  return nextTick()
}

export default i18n
