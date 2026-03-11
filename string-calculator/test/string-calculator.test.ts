import { describe, it, expect } from "vitest"
import { add } from "../src/string-calculator"

describe("add", () => {
	it("returns 0 for empty string", () => {
		expect(add("")).toBe(0)
	})
})
