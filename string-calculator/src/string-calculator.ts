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

	return body.split(delimiter).reduce((sum, n) => sum + parseInt(n, 10), 0)
}
