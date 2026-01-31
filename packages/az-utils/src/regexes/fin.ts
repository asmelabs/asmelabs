/**
 * FIN (Fərdi İdentifikasiya Nömrəsi) regex pattern
 *
 * Format: 7 characters - uppercase English letters (except I, O) and digits
 *
 * @example
 * ```ts
 * FIN_REGEX.test('5NXLM7A') // true
 * FIN_REGEX.test('ABC1234') // true
 * FIN_REGEX.test('ABCIDEF') // false (contains I)
 * FIN_REGEX.test('ABCODEF') // false (contains O)
 * FIN_REGEX.test('abc1234') // false (lowercase)
 * FIN_REGEX.test('12345678') // false (8 chars)
 * ```
 */
export const FIN_REGEX = /^[A-HJ-NP-Z0-9]{7}$/;
