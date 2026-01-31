import { FIN_REGEX } from "../regexes/fin";

/**
 * Validates a FIN (Fərdi İdentifikasiya Nömrəsi)
 *
 * @param fin - The FIN to validate
 * @returns `true` if valid, `false` otherwise
 *
 * @example
 * ```ts
 * validateFin('5NXLM7A') // true
 * validateFin('5nxlm7a') // true (case insensitive)
 * validateFin(' 5NXLM7A ') // true (trims whitespace)
 * validateFin('ABCIDEF') // false (contains I)
 * validateFin('123') // false (too short)
 * ```
 *
 * @alias isFin
 */
export function validateFin(fin: string): boolean {
	if (typeof fin !== "string") return false;
	return FIN_REGEX.test(fin.trim().toUpperCase());
}

/**
 * Alias for validateFin
 *
 * @alias validateFin
 */
export const isFin = validateFin;

/**
 * Normalizes a FIN to uppercase, trimmed format
 *
 * @param fin - The FIN to normalize
 * @returns Normalized FIN (uppercase, trimmed)
 * @throws {TypeError} If input is not a string
 * @throws {Error} If FIN cannot be normalized to valid format
 *
 * @example
 * ```ts
 * normalizeFin('5nxlm7a') // '5NXLM7A'
 * normalizeFin(' 5NXLM7A ') // '5NXLM7A'
 * normalizeFin('ABCIDEF') // throws Error
 * normalizeFin(123) // throws TypeError
 * ```
 */
export function normalizeFin(fin: string): string {
	if (typeof fin !== "string") {
		throw new TypeError("FIN must be a string");
	}

	const normalized = fin.trim().toUpperCase();

	if (!FIN_REGEX.test(normalized)) {
		throw new Error(
			`Invalid FIN: "${fin}" cannot be normalized to a valid format`,
		);
	}

	return normalized;
}
