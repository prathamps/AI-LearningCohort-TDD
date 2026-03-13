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

	it("returns false for century years (divisible by 100)", () => {
		expect(isLeapYear(1900)).toBe(false)
		expect(isLeapYear(1800)).toBe(false)
	})

	it("returns true for years divisible by 400", () => {
		expect(isLeapYear(2000)).toBe(true)
		expect(isLeapYear(1600)).toBe(true)
	})
})
