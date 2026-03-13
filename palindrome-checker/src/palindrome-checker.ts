export function isPalindrome(text: string): boolean {
	const normalized = text.toLowerCase()
	const reversed = normalized.split("").reverse().join("")
	return normalized === reversed
}
