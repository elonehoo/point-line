import type { Option } from '../types'
import { DEFAULT_OPTION, STANDARD } from '../const'

function unicodeHexMorse(ch: string): string {
  const r = []
  for (let i = 0; i < ch.length; i++)
    r[i] = (`00${ch.charCodeAt(i).toString(16)}`).slice(-4)

  let s = r.join('')
  s = Number.parseInt(s, 16).toString(2)
  return s
}

export function encode(msg: string, option?: Option): string {
  const { space, short, long } = {
    ...DEFAULT_OPTION,
    ...option,
  }

  const text = msg
    .replace(/\s+/g, '')
    .toLocaleUpperCase()
    .split('')

  return text
    .map((ch: string) => {
      let r = STANDARD[ch]
      if (!r)
        r = unicodeHexMorse(ch)

      return r.replace(/0/g, short).replace(/1/g, long)
    })
    .join(space)
}
