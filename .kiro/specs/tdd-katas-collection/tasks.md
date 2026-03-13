# Implementation Plan: TDD Katas Collection

## Overview

This plan implements a standardized kata collection system with consistent tooling (TypeScript, Vitest, pnpm) and structure. The implementation focuses on creating a kata generator tool that scaffolds new katas following the established patterns from fizzbuzz and string-calculator, then uses it to add 10 new kata exercises to the collection.

## Tasks

- [ ] 1. Create kata generator utility
  - [ ] 1.1 Implement kata name validation function
    - Create src/kata-generator/validation.ts with isValidKebabCase() function
    - Validate kebab-case format, reserved names, and character restrictions
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 12.1, 12.2, 12.3, 12.4_
  
  - [ ]* 1.2 Write property test for kata name validation
    - **Property 1: Naming Convention**
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4**
  
  - [ ] 1.3 Implement configuration file generators
    - Create src/kata-generator/templates.ts with generatePackageJson() and generateTsConfig() functions
    - Generate package.json with correct scripts, dependencies, and packageManager field
    - Generate tsconfig.json with ESNext target, NodeNext module resolution, and strict mode
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 10.1, 10.2, 10.3, 10.4_
  
  - [ ]* 1.4 Write unit tests for configuration generators
    - Test package.json structure, scripts, and dependencies
    - Test tsconfig.json compiler options
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [ ] 2. Implement template generation for kata files
  - [ ] 2.1 Create implementation file template generator
    - Create generateImplementationTemplate() function in src/kata-generator/templates.ts
    - Generate TypeScript file with exported function stub
    - Use kata name to derive function name in camelCase
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 15.1, 15.5_
  
  - [ ] 2.2 Create test file template generator
    - Create generateTestTemplate() function in src/kata-generator/templates.ts
    - Generate Vitest test file with imports, describe block, and example test
    - Import function from ../src/ directory
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5, 15.2, 15.3, 15.4_
  
  - [ ]* 2.3 Write unit tests for template generators
    - Test implementation template structure and exports
    - Test test template imports and structure
    - Verify generated code is valid TypeScript
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 7.1, 7.2, 7.3, 7.4_

- [ ] 3. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Implement main kata creation function
  - [ ] 4.1 Create directory structure creation logic
    - Implement createKataDirectory() function in src/kata-generator/creator.ts
    - Create kata root directory, src/, and test/ subdirectories
    - Handle file system errors with descriptive messages
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 8.1, 8.2, 8.7, 13.1, 13.2, 13.3_
  
  - [ ] 4.2 Implement file writing operations
    - Write package.json and tsconfig.json to kata directory
    - Write implementation template to src/
    - Write test template to test/
    - _Requirements: 1.3, 1.4, 8.3, 8.4, 8.5, 8.6_
  
  - [ ] 4.3 Add dependency installation step
    - Execute "pnpm install" in kata directory after file creation
    - Handle installation failures with error logging
    - Verify node_modules/ directory created
    - _Requirements: 1.5, 9.1, 9.2, 9.3_
  
  - [ ]* 4.4 Write integration tests for kata creation
    - Test complete kata creation workflow
    - Verify all files and directories created correctly
    - Test error handling for duplicate names and invalid names
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 12.1, 12.2, 12.3, 12.4_

- [ ] 5. Create CLI interface for kata generator
  - [ ] 5.1 Implement command-line argument parsing
    - Create src/kata-generator/cli.ts with main() function
    - Parse kata name from command-line arguments
    - Validate inputs before creating kata
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  
  - [ ] 5.2 Add user-friendly error messages
    - Display validation errors with examples
    - Show file system errors with troubleshooting steps
    - Provide success message with next steps
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 13.1, 13.2, 13.3_

- [ ] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Create bowling-game kata
  - [ ] 7.1 Generate bowling-game kata structure
    - Run kata generator to create bowling-game directory
    - Verify package.json, tsconfig.json, src/, and test/ created
    - Install dependencies with pnpm
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 7.2 Implement bowling score calculation
    - Write implementation in src/bowling-game.ts
    - Handle strikes, spares, and regular frames
    - Export scoreGame() function
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 7.3 Write tests for bowling-game
    - Test perfect game (all strikes)
    - Test all spares
    - Test no strikes or spares
    - Test edge cases and invalid inputs
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 8. Create roman-numerals kata
  - [ ] 8.1 Generate roman-numerals kata structure
    - Run kata generator to create roman-numerals directory
    - Verify structure and install dependencies
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 8.2 Implement Roman numeral conversion
    - Write toRoman() and fromRoman() functions in src/roman-numerals.ts
    - Handle numbers 1-3999
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 8.3 Write tests for roman-numerals
    - Test basic conversions (1-10)
    - Test subtractive notation (IV, IX, XL, XC, CD, CM)
    - Test large numbers and edge cases
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_
  
  - [ ]* 8.4 Write property test for roman-numerals
    - **Property 2: Round trip consistency**
    - **Validates: Requirements 7.4**

- [ ] 9. Create prime-factors kata
  - [ ] 9.1 Generate prime-factors kata structure
    - Run kata generator to create prime-factors directory
    - Verify structure and install dependencies
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 9.2 Implement prime factorization
    - Write primeFactors() function in src/prime-factors.ts
    - Return array of prime factors in ascending order
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 9.3 Write tests for prime-factors
    - Test prime numbers (return [n])
    - Test composite numbers
    - Test powers of primes
    - Test edge cases (1, 2)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 10. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Create leap-year kata
  - [ ] 11.1 Generate leap-year kata structure
    - Run kata generator to create leap-year directory
    - Verify structure and install dependencies
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 11.2 Implement leap year calculation
    - Write isLeapYear() function in src/leap-year.ts
    - Apply leap year rules (divisible by 4, except centuries unless divisible by 400)
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 11.3 Write tests for leap-year
    - Test typical leap years (2020, 2024)
    - Test non-leap years (2021, 2022)
    - Test century years (1900 not leap, 2000 is leap)
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 12. Create word-wrap kata
  - [ ] 12.1 Generate word-wrap kata structure
    - Run kata generator to create word-wrap directory
    - Verify structure and install dependencies
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 12.2 Implement word wrapping algorithm
    - Write wrap() function in src/word-wrap.ts
    - Break text at specified column width
    - Preserve word boundaries
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 12.3 Write tests for word-wrap
    - Test empty string
    - Test single word shorter than width
    - Test single word longer than width
    - Test multiple words with wrapping
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 13. Create mars-rover kata
  - [ ] 13.1 Generate mars-rover kata structure
    - Run kata generator to create mars-rover directory
    - Verify structure and install dependencies
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 13.2 Implement rover movement simulation
    - Write Rover class in src/mars-rover.ts
    - Handle position, direction, and command processing
    - Support L (turn left), R (turn right), M (move forward) commands
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 13.3 Write tests for mars-rover
    - Test initial position and direction
    - Test turning commands
    - Test movement in all directions
    - Test command sequences
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 14. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 15. Create tennis-game kata
  - [ ] 15.1 Generate tennis-game kata structure
    - Run kata generator to create tennis-game directory
    - Verify structure and install dependencies
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 15.2 Implement tennis scoring
    - Write TennisGame class in src/tennis-game.ts
    - Handle love, 15, 30, 40, deuce, advantage, game
    - Track scores for both players
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 15.3 Write tests for tennis-game
    - Test basic scoring (0-0 to 40-40)
    - Test deuce and advantage scenarios
    - Test winning conditions
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 16. Create bank-account kata
  - [ ] 16.1 Generate bank-account kata structure
    - Run kata generator to create bank-account directory
    - Verify structure and install dependencies
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 16.2 Implement bank account operations
    - Write BankAccount class in src/bank-account.ts
    - Support deposit, withdraw, and getBalance operations
    - Track transaction history
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 16.3 Write tests for bank-account
    - Test deposits and withdrawals
    - Test balance calculations
    - Test insufficient funds scenarios
    - Test transaction history
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 17. Create gilded-rose kata
  - [ ] 17.1 Generate gilded-rose kata structure
    - Run kata generator to create gilded-rose directory
    - Verify structure and install dependencies
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 17.2 Implement gilded rose inventory system
    - Write Item class and updateQuality() function in src/gilded-rose.ts
    - Handle special items (Aged Brie, Sulfuras, Backstage passes)
    - Apply quality degradation rules
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 17.3 Write tests for gilded-rose
    - Test normal item quality degradation
    - Test special item behaviors
    - Test quality bounds (0-50)
    - Test sell-by date effects
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 18. Create poker-hands kata
  - [ ] 18.1 Generate poker-hands kata structure
    - Run kata generator to create poker-hands directory
    - Verify structure and install dependencies
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 9.1, 9.2_
  
  - [ ] 18.2 Implement poker hand comparison
    - Write compareHands() function in src/poker-hands.ts
    - Identify hand ranks (high card, pair, two pair, three of a kind, straight, flush, full house, four of a kind, straight flush)
    - Compare hands and determine winner
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 11.1, 11.2, 11.3, 11.4_
  
  - [ ]* 18.3 Write tests for poker-hands
    - Test all hand rank identifications
    - Test hand comparisons within same rank
    - Test hand comparisons across different ranks
    - Test tie scenarios
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 14.1, 14.2, 14.3, 14.4, 14.5_

- [ ] 19. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 20. Verify collection consistency
  - [ ] 20.1 Run consistency validation across all katas
    - Verify all katas have identical tsconfig.json compiler options
    - Verify all katas use same package manager and test scripts
    - Verify all katas follow kebab-case naming
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 4.1, 4.2, 4.3, 4.4_
  
  - [ ]* 20.2 Write property tests for collection-wide invariants
    - **Property 1: Directory Isolation**
    - **Property 3: Test Executability**
    - **Property 4: Naming Convention**
    - **Validates: Requirements 11.1, 11.2, 11.3, 11.4, 5.1, 5.2, 5.3, 4.1, 4.2, 4.3, 4.4**

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- The kata generator tool (tasks 1-6) should be created first to streamline kata creation
- Each kata implementation (tasks 7-18) follows the same pattern: generate structure, implement logic, write tests
- Final verification (task 20) ensures collection-wide consistency
