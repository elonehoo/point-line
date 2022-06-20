import { reverseStandard } from '../util';

export const STANDARD = {
  A: '01',
  B: '1000',
  C: '1010',
  D: '100',
  E: '0',
  F: '0010',
  G: '110',
  H: '0000',
  I: '00',
  J: '0111',
  K: '101',
  L: '0100',
  M: '11',
  N: '10',
  O: '111',
  P: '0110',
  Q: '1101',
  R: '010',
  S: '000',
  T: '1',
  U: '001',
  V: '0001',
  W: '011',
  X: '1001',
  Y: '1011',
  Z: '1100',
  '0': '11111',
  '1': '01111',
  '2': '00111',
  '3': '00011',
  '4': '00001',
  '5': '00000',
  '6': '10000',
  '7': '11000',
  '8': '11100',
  '9': '11110',
  '.': '010101',
  ',': '110011',
  '?': '001100',
  "'": '011110',
  '!': '101011',
  '/': '10010',
  '(': '10110',
  ')': '101101',
  '&': '01000',
  ':': '111000',
  ';': '101010',
  '=': '10001',
  '+': '01010',
  '-': '100001',
  _: '001101',
  '"': '010010',
  $: '0001001',
  '@': '011010',
};

export const REVERSED_STANDARD = reverseStandard(STANDARD);

export const DEFAULT_OPTION = {
  space: '/',
  short: '.',
  long: '-',
};
