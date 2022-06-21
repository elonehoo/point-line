import { decode, encode } from '@elonehoo/point-line'

import { expect, test } from 'vitest'

test('demo', () => {
  expect(encode('I love you, 我爱你。')).toBe('../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.')
  expect(decode('../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.')).toBe('ILOVEYOU,我爱你。')
})

test('demo2', () => {
  expect(encode('Hello', { space: ' ' })).toBe('.... . .-.. .-.. ---')
  expect(decode('.... . .-.. .-.. ---', { space: ' ' })).toBe('HELLO')
})

test('demo3', () => {
  // standart morse
  console.log(encode('Hello, World!'))

  // unicode
  console.log(encode('こんにちは世界！'))
  console.log(encode('你好，世界！'))
})

test('demo4', () => {
  console.log(decode('...././.-../.-../---/--..--/.--/---/.-./.-../-../-.-.--'))
})
