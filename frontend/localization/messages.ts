import type { LocaleObject } from '@nuxtjs/i18n'
import ar from './ar-IQ.json'
import en from './en-US.json'

// Types
export const messages = {
  'en-US': en,
  'ar-IQ': ar,
}

export const availableLocales = Object.keys(messages)

export const LOCALE_DEFAULT = 'en-US'

export const LOCALES: LocaleObject[] = [
  {
    code: 'en-US',
    iso: 'en-US',
    name: 'English',
    icon: 'i-emojione:flag-for-united-kingdom',
    dateFormat: 'MM/DD/YYYY',
    dir: 'ltr',
    file: 'en-US.json',
  },
  {
    code: 'ar-IQ',
    iso: 'ar-IQ',
    name: 'العربية',
    icon: 'i-emojione:flag-for-iraq',
    dateFormat: 'DD/MM/YYYY',
    dir: 'rtl',
    file: 'ar-IQ.json',
  },
]
