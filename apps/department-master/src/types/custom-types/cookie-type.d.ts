import { COOKIE_KEY } from 'src/common/helpers'

export type CookieType = Partial<Record<keyof typeof COOKIE_KEY, string>>
