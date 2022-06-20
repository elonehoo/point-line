import {decode ,encode} from '@elonehoo/point-line'

import {test,expect} from 'vitest'

test('demo',()=>{
  expect(encode('I love you, 我爱你。')).toBe('../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.')
  expect(decode('../.-../---/...-/./-.--/---/..-/--..--/--...-....-...-/---..-...--...-/-..----.--...../--..........-.')).toBe('ILOVEYOU,我爱你。')
})

test('demo2',()=>{
  expect(encode('Hello',{space:' '})).toBe('.... . .-.. .-.. ---')
  expect(decode('.... . .-.. .-.. ---',{space:' '})).toBe('HELLO')
})
