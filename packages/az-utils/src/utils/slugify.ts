/**
 * Slugify a text
 *
 * This function will convert a text to a slug (URL friendly) format. It will remove special characters and spaces, and
 * replace them with a hyphen. It will also handle azerbaijani characters.
 *
 * @example
 * ```ts
 * const slug1 = slugify("Hello World"); // "hello-world"
 * const slug2 = slugify("Hello  123"); // "hello-123"
 * const slug3 = slugify("-Hello World 123 İş"); // "hello-world-123-ish"
 * ```
 *
 * @param text - The text to slugify
 * @returns The slugified text
 */
export function slugify(text: string) {
	if (typeof text !== "string") {
		throw new TypeError("Text must be a string");
	}

	if (text.length === 0 || text.trim() === "") {
		return "";
	}

	return text
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/ə/g, "e")
		.replace(/ı/g, "i")
		.replace(/ö/g, "o")
		.replace(/ü/g, "u")
		.replace(/ç/g, "ch")
		.replace(/ş/g, "sh")
		.replace(/ğ/g, "g")
		.replace(/[^a-z0-9-]/g, "")
		.replace(/-+/g, "-")
		.replace(/^-|-$/g, "");
}
