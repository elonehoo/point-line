import type { Option } from '../types'

import { DEFAULT_OPTION, REVERSED_STANDARD } from '../const'

function morseHexUnicode(mor: any) {
  mor = Number.parseInt(mor, 2)
  if (Number.isNaN(mor))
    return ''
  return String.fromCharCode(mor)
}

export function decode(morse: string, option?: Option): string {
  const { space, short, long } = {
    ...DEFAULT_OPTION,
    ...option,
  }

  return morse
    .split(space)
    .map((mor: string) => {
      const m = mor
        .replace(/\s+/g, '')
        .replace(new RegExp(`\\${short}`, 'g'), '0')
        .replace(new RegExp(`\\${long}`, 'g'), '1')

      let r = REVERSED_STANDARD[m]
      if (!r)
        r = morseHexUnicode(m)
      return r
    })
    .join('')
}
