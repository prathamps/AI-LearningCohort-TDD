export function add(numbers: string): number {
	if (numbers === "") return 0

	let delimiter = /,|\n/
	let body = numbers

	if (numbers.startsWith("//")) {
		const headerEnd = numbers.indexOf("\n")
		const customDelimiter = numbers.slice(2, headerEnd)
		delimiter = new RegExp(
			customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
		)
		body = numbers.slice(headerEnd + 1)
	}

	const parsed = body.split(delimiter).map((n) => parseInt(n, 10))
	const negatives = parsed.filter((n) => n < 0)
	if (negatives.length > 0) {
		throw new Error(`negatives not allowed: ${negatives.join(",")}`)
	}

	return parsed.reduce((sum, n) => sum + n, 0)
}
