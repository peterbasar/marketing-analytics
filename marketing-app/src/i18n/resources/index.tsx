import { translations as translations_deDE } from "i18n/resources/translations/de-DE/translations";
import { translations as translations_enUS } from "i18n/resources/translations/en-US/translations";


export const AVAILABLE_LANGUAGES = {
    "en-US": "en-US",
    "de-DE": "de-DE",
}

export const I18N_RESOURCES = {
    [AVAILABLE_LANGUAGES["en-US"]]: translations_enUS,
    [AVAILABLE_LANGUAGES["de-DE"]]: translations_deDE,
}