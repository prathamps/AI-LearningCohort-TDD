import { describe, it, expect } from "vitest"
import { isPalindrome } from "../src/palindrome-checker"

describe("isPalindrome", () => {
	it("returns true for an empty string", () => {
		expect(isPalindrome("")).toBe(true)
	})
})
