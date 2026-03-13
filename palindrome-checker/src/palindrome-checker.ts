export function isPalindrome(text: string): boolean {
	const normalized = text.toLowerCase().replace(/[^a-z0-9]/g, "")
	const reversed = normalized.split("").reverse().join("")
	return normalized === reversed
}
