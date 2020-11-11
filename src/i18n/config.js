import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'

i18next
  .use(initReactI18next)
  .init({
    lng: 'hk',
    fallbackLng: 'hk',
    resources: {
      'hk': {
        translations: require('@/locales/hk/translations.json')
      },
      en: {
        translations: require('@/locales/en/translations.json')
      }
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    react: {
      wait: true,
      transSupportBasicHtmlNodes: true
    },
  })

i18next.languages = ['hk', 'en'];

export default i18next;