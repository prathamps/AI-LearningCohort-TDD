function parseInput(numbers: string): { delimiter: RegExp; body: string } {
	if (numbers.startsWith("//")) {
		const headerEnd = numbers.indexOf("\n")
		const customDelimiter = numbers.slice(2, headerEnd)
		return {
			delimiter: new RegExp(
				customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
			),
			body: numbers.slice(headerEnd + 1),
		}
	}
	return { delimiter: /,|\n/, body: numbers }
}

export function add(numbers: string): number {
	if (numbers === "") return 0

	const { delimiter, body } = parseInput(numbers)
	const parsed = body.split(delimiter).map((n) => parseInt(n, 10))

	const negatives = parsed.filter((n) => n < 0)
	if (negatives.length > 0) {
		throw new Error(`negatives not allowed: ${negatives.join(",")}`)
	}

	return parsed.reduce((sum, n) => sum + n, 0)
}
