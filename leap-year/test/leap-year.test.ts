import { describe, it, expect } from "vitest"
import { isLeapYear } from "../src/leap-year"

describe("isLeapYear", () => {
	it("returns true for a year divisible by 4", () => {
		expect(isLeapYear(1996)).toBe(true)
		expect(isLeapYear(2004)).toBe(true)
	})

	it("returns false for a year not divisible by 4", () => {
		expect(isLeapYear(1997)).toBe(false)
		expect(isLeapYear(2003)).toBe(false)
	})
})
