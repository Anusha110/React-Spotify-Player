import i18n from 'i18next'
import HttpApi from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const fallbackLng = ['en']

i18n
   .use(HttpApi)
   .use(initReactI18next)
   .init({
      fallbackLng,
      backend: {
         loadPath: '/i18n/translations/{{lng}}/{{ns}}.json'
      },
      ns: ['common', 'authentication', 'reactSpotifyPlayer'],
      defaultNS: 'common',
      react: {
         useSuspense: true,
         wait: true
      }
   })

export default i18n
