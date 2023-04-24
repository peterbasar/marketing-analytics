import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from './resources';
import { I18N_RESOURCES } from './resources';

i18n
  .use(initReactI18next)
  .init({
    lng: AVAILABLE_LANGUAGES['en-US'], // default language
    fallbackLng: AVAILABLE_LANGUAGES['en-US'],
    debug: false,
    resources: I18N_RESOURCES,
  }
);
export default i18n