# Day 2 — AI Patterns Observed

## Where AI Helped

1. **Boilerplate** — test scaffolding, imports, and file setup were instant and correct.
2. **Tricky mechanics** — regex escaping for custom delimiters and collecting all negatives into one error message came out right first try.
3. **Refactoring** — suggested extracting `parseInput()` at exactly the right moment, keeping `add()` focused.

## Where AI Struggled

1. **TDD discipline** — kept jumping to the full solution before tests existed for each step.
2. **Test names** — produced technically correct but vague names; had to push for names that read as specs.
3. **Over-abstraction** — suggested helper functions in FizzBuzz before the logic was complex enough to need them.

## Accept vs. Iterate

- **Accept** when the suggestion fits the current step and matches the existing style.
- **Iterate** when it skips TDD steps, adds unnecessary scope, or names things poorly.
