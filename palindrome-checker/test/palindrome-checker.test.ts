import { describe, it, expect } from "vitest"
import { isPalindrome } from "../src/palindrome-checker"

describe("isPalindrome", () => {
	it("returns true for an empty string", () => {
		expect(isPalindrome("")).toBe(true)
	})

	it("returns true for a single character", () => {
		expect(isPalindrome("a")).toBe(true)
		expect(isPalindrome("z")).toBe(true)
	})

	it("returns true for multi-character palindromes", () => {
		expect(isPalindrome("aba")).toBe(true)
		expect(isPalindrome("racecar")).toBe(true)
		expect(isPalindrome("madam")).toBe(true)
	})

	it("returns false for non-palindromes", () => {
		expect(isPalindrome("hello")).toBe(false)
		expect(isPalindrome("world")).toBe(false)
		expect(isPalindrome("abc")).toBe(false)
	})

	it("is case-insensitive", () => {
		expect(isPalindrome("Racecar")).toBe(true)
		expect(isPalindrome("Madam")).toBe(true)
		expect(isPalindrome("ABA")).toBe(true)
	})
})
