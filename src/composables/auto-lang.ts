import { defaultLocale, loadLanguageAsync } from '~/locale'

export const useApplocale = createGlobalState(() =>
  useStorage('locale', defaultLocale),
)

export const useAutoLocale = () => {
  const appLocale = useApplocale()
  const { locale, getLocaleMessage } = useI18n()
  const { isSupported, language } = useNavigatorLanguage()

  const setLanguage = async (lang: string) => {
    try {
      await loadLanguageAsync(lang)
      appLocale.value = lang
      locale.value = lang
    }
    catch (err) {
      console.warn(`Failed to load language: ${lang}`)
    }
  }

  if (isSupported.value) {
    if (language.value && language.value !== appLocale.value)
      setLanguage(language.value).then(() => {})

    watch(language, (newVal) => {
      newVal && setLanguage(newVal).then(() => {})
    })
  }

  const naiveLocale = computed(
    () => getLocaleMessage(appLocale.value).naiveUI || {},
  )

  watch(appLocale, (newVal) => {
    if (newVal && newVal !== locale.value) locale.value = newVal
  })

  return {
    naiveLocale,
  }
}
