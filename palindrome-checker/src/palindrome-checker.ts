function normalize(text: string): string {
	return text.toLowerCase().replace(/[^a-z0-9]/g, "")
}

export function isPalindrome(text: string): boolean {
	const cleaned = normalize(text)
	return cleaned === cleaned.split("").reverse().join("")
}
