import { expect, it } from 'vitest'
import { decode, encode } from '../src'

it('demo', () => {
  expect(encode('I love you, 我爱你。')).toBe('../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.')
  expect(decode('../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.')).toBe('ILOVEYOU,我爱你。')
})

it('demo2', () => {
  expect(encode('Hello', { space: ' ' })).toBe('.... . .-.. .-.. ---')
  expect(decode('.... . .-.. .-.. ---', { space: ' ' })).toBe('HELLO')
})

it('demo3', () => {
  // standart morse
  expect(encode('Hello, World!')).toBe('...././.-../.-../---/--..--/.--/---/.-./.-../-../-.-.--')

  // unicode
  expect(encode('こんにちは世界！')).toBe('--.....-.-..--/--....-..-..--/--.....--.-.--/--.....--....-/--.....--.----/-..---....-.--./---.-.-.-..--../--------.......-')
  expect(encode('你好，世界！')).toBe('-..----.--...../-.--..-.-----.-/--------....--../-..---....-.--./---.-.-.-..--../--------.......-')
})

it('demo4', () => {
  expect(decode('...././.-../.-../---/--..--/.--/---/.-./.-../-../-.-.--')).toBe('HELLO,WORLD!')
})

it('does not retain regular expression state between calls', () => {
  for (let attempt = 0; attempt < 3; attempt++) {
    expect(encode('  H e l l o\t', { space: ' ' })).toBe('.... . .-.. .-.. ---')
    expect(decode('.... . .-.. .-.. ---', { space: ' ' })).toBe('HELLO')
    expect(encode(' SOS ')).toBe('.../---/...')
    expect(decode('.../---/...')).toBe('SOS')
  }
})
