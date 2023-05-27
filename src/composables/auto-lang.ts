import i18n, { defaultLocale, loadLanguageAsync } from '~/locale'

export const useAppLocale = createGlobalState(() =>
  useStorage('locale', defaultLocale),
)

export const useAutoLocale = () => {
  const appLocale = useAppLocale()
  const { locale } = useI18n()
  const { isSupported, language } = useNavigatorLanguage()

  if (isSupported.value) {
    if (language.value && language.value !== defaultLocale)
      setLanguage(language.value).then(() => {})

    watch(language, (newVal) => {
      newVal && setLanguage(newVal).then(() => {})
    })
  }

  const naiveLocale = computed(
    () => i18n.global.getLocaleMessage(appLocale.value).naiveUI || {},
  )

  async function setLanguage(lang: string) {
    try {
      await loadLanguageAsync(lang).then(() => {})
      appLocale.value = lang
      locale.value = lang
    }
    catch (err) {
      console.warn(`Failed to load language: ${lang}`)
    }
  }

  watch(
    appLocale,
    (newVal) => {
      if (newVal && newVal !== locale.value) setLanguage(newVal).then(() => {})
    },
    {
      immediate: true,
    },
  )

  return {
    naiveLocale,
  }
}
