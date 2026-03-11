import { describe, it, expect } from "vitest"
import { add } from "../src/string-calculator"

describe("add", () => {
	it("returns 0 for empty string", () => {
		expect(add("")).toBe(0)
	})

	it("returns the number for a single value", () => {
		expect(add("1")).toBe(1)
		expect(add("5")).toBe(5)
	})

	it("returns sum of two comma-separated numbers", () => {
		expect(add("1,2")).toBe(3)
	})
})
