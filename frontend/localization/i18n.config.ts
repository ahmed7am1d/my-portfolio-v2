import { messages } from "./messages"

export default defineI18nConfig(() => ({
    legacy: false,
    fallbackFormat: 'en-US',
    messages
  }))