import i18n from "i18next";
import translation from "./de/translation.json";
import { initReactI18next } from "react-i18next";
import { NativeModules, Platform } from "react-native";
export const resources = {
  de: {
    translation,
  },
} as const;

const locale =
  Platform.OS === "ios"
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

i18n.init({
  resources,
  lng: locale.substring(0, 2),
  fallbackLng: "en", // use en if detected lng is not available

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

https: i18n.use(initReactI18next).init({
  lng: "de",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources,
});
