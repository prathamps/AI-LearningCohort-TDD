import { describe, it, expect } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  it("returns the number as string for 1", () => {
    expect(fizzbuzz(1)).toBe("1");
    });
});
