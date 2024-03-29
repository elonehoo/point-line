/**
 * compute the reverse mapping standard dictionary
 * @param standard
 */
export function reverseStandard(standard: any): any {
  const reversed: any = {}
  for (const key in standard)
    reversed[standard[key]] = key

  return reversed
}
