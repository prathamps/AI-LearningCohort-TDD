# Requirements Document: TDD Katas Collection

## Introduction

The TDD Katas Collection feature provides a standardized, scalable collection of Test-Driven Development practice exercises. Each kata is an isolated, self-contained exercise with consistent tooling (TypeScript, Vitest, pnpm) and structure. The system enables developers to practice TDD principles through progressively challenging exercises while maintaining uniform configuration and testing approaches across all katas.

## Glossary

- **Kata**: A self-contained TDD practice exercise in its own directory with source code, tests, and configuration
- **Kata_Directory**: The root folder for a kata containing src/, test/, package.json, and tsconfig.json
- **Kata_Generator**: Tool or process that creates new kata directory structures
- **Test_Suite**: Collection of Vitest test cases for a specific kata
- **Package_Manager**: pnpm tool used for dependency management
- **Configuration_Files**: package.json and tsconfig.json files that define kata setup
- **Kebab_Case**: Naming convention using lowercase letters and hyphens (e.g., "bowling-game")

## Requirements

### Requirement 1: Kata Directory Structure

**User Story:** As a developer, I want each kata in an isolated directory with standard structure, so that I can work on exercises independently without conflicts.

#### Acceptance Criteria

1. THE Kata_Directory SHALL contain a src/ subdirectory for implementation files
2. THE Kata_Directory SHALL contain a test/ subdirectory for test files
3. THE Kata_Directory SHALL contain a package.json file with kata-specific configuration
4. THE Kata_Directory SHALL contain a tsconfig.json file with TypeScript configuration
5. WHEN dependencies are installed, THE Kata_Directory SHALL contain a node_modules/ subdirectory

### Requirement 2: Package Configuration

**User Story:** As a developer, I want consistent package configuration across all katas, so that I have a uniform development experience.

#### Acceptance Criteria

1. THE package.json SHALL include a "test" script with value "vitest"
2. THE package.json SHALL include a "test:watch" script with value "vitest --watch"
3. THE package.json SHALL specify packageManager field as "pnpm@10.32.1"
4. THE package.json SHALL include TypeScript as a devDependency
5. THE package.json SHALL include Vitest as a devDependency
6. THE package.json SHALL include @types/node as a devDependency
7. THE package.json name field SHALL match the Kata_Directory name

### Requirement 3: TypeScript Configuration

**User Story:** As a developer, I want consistent TypeScript settings across all katas, so that I have predictable compilation behavior.

#### Acceptance Criteria

1. THE tsconfig.json SHALL set compilerOptions.target to "ESNext"
2. THE tsconfig.json SHALL set compilerOptions.module to "NodeNext"
3. THE tsconfig.json SHALL set compilerOptions.moduleResolution to "NodeNext"
4. THE tsconfig.json SHALL set compilerOptions.strict to true
5. THE tsconfig.json SHALL include "vitest/globals" in compilerOptions.types array
6. THE tsconfig.json SHALL set compilerOptions.esModuleInterop to true

### Requirement 4: Kata Naming Convention

**User Story:** As a developer, I want kata names to follow a consistent convention, so that the collection is organized and predictable.

#### Acceptance Criteria

1. THE Kata_Directory name SHALL follow kebab-case format
2. THE Kata_Directory name SHALL start with a lowercase letter
3. THE Kata_Directory name SHALL contain only lowercase letters, numbers, and hyphens
4. THE Kata_Directory name SHALL NOT end with a hyphen
5. IF a kata name is reserved (node_modules, dist, build, .git, .kiro), THEN THE Kata_Generator SHALL reject the name

### Requirement 5: Test Executability

**User Story:** As a developer, I want to run tests independently for each kata, so that I can verify my implementation without external dependencies.

#### Acceptance Criteria

1. WHEN a developer runs "pnpm test" in a Kata_Directory, THE Test_Suite SHALL execute all tests
2. WHEN a developer runs "pnpm test:watch" in a Kata_Directory, THE Test_Suite SHALL execute in watch mode
3. THE Test_Suite SHALL run without requiring external setup or configuration
4. THE Test_Suite SHALL report test results with clear pass/fail status
5. WHEN tests fail, THE Test_Suite SHALL provide descriptive error messages

### Requirement 6: Test File Structure

**User Story:** As a developer, I want test files to follow a consistent structure, so that I can easily understand and write tests.

#### Acceptance Criteria

1. THE test file SHALL import describe, it, and expect from Vitest
2. THE test file SHALL import the function under test from the src/ directory
3. THE test file SHALL include at least one describe block
4. THE test file SHALL include at least one it block with an expect assertion
5. THE test file SHALL use clear, descriptive test names

### Requirement 7: Implementation File Structure

**User Story:** As a developer, I want implementation files to export testable functions, so that I can follow TDD principles.

#### Acceptance Criteria

1. THE implementation file SHALL be located in the src/ subdirectory
2. THE implementation file SHALL export at least one function
3. THE implementation file SHALL use TypeScript syntax
4. THE exported functions SHALL be importable by test files

### Requirement 8: Kata Creation

**User Story:** As a developer, I want to create new katas with standard structure, so that I can quickly start practicing TDD.

#### Acceptance Criteria

1. WHEN creating a new kata, THE Kata_Generator SHALL create the Kata_Directory
2. WHEN creating a new kata, THE Kata_Generator SHALL create src/ and test/ subdirectories
3. WHEN creating a new kata, THE Kata_Generator SHALL generate package.json with correct configuration
4. WHEN creating a new kata, THE Kata_Generator SHALL generate tsconfig.json with correct configuration
5. WHEN creating a new kata, THE Kata_Generator SHALL create template implementation file in src/
6. WHEN creating a new kata, THE Kata_Generator SHALL create template test file in test/
7. IF a Kata_Directory with the same name already exists, THEN THE Kata_Generator SHALL reject the creation with a descriptive error

### Requirement 9: Dependency Installation

**User Story:** As a developer, I want dependencies installed automatically for new katas, so that I can start testing immediately.

#### Acceptance Criteria

1. WHEN a new kata is created, THE Kata_Generator SHALL execute "pnpm install" in the Kata_Directory
2. WHEN dependency installation succeeds, THE node_modules/ directory SHALL be created
3. IF dependency installation fails, THEN THE Kata_Generator SHALL log error details and provide troubleshooting steps

### Requirement 10: Configuration Consistency

**User Story:** As a developer, I want all katas to use identical configurations, so that I have a consistent experience across the collection.

#### Acceptance Criteria

1. FOR ALL katas, THE TypeScript configuration SHALL be identical
2. FOR ALL katas, THE Vitest configuration SHALL be identical
3. FOR ALL katas, THE package manager SHALL be pnpm version 10.32.1
4. FOR ALL katas, THE test script commands SHALL be identical

### Requirement 11: Kata Isolation

**User Story:** As a developer, I want each kata to be self-contained, so that changes in one kata don't affect others.

#### Acceptance Criteria

1. FOR ALL katas, THE Kata_Directory SHALL contain all necessary files for independent operation
2. FOR ALL katas, THE dependencies SHALL be installed locally in node_modules/
3. FOR ALL katas, THE tests SHALL run without accessing files outside the Kata_Directory
4. FOR ALL katas, THE implementation SHALL not import code from other katas

### Requirement 12: Error Handling for Invalid Names

**User Story:** As a developer, I want clear error messages for invalid kata names, so that I can correct mistakes quickly.

#### Acceptance Criteria

1. IF a kata name is empty, THEN THE Kata_Generator SHALL throw an error with validation guidance
2. IF a kata name contains uppercase letters, THEN THE Kata_Generator SHALL throw an error with kebab-case examples
3. IF a kata name contains invalid characters, THEN THE Kata_Generator SHALL throw an error with valid character list
4. IF a kata name is reserved, THEN THE Kata_Generator SHALL throw an error listing reserved names

### Requirement 13: Error Handling for File System Issues

**User Story:** As a developer, I want clear error messages for file system problems, so that I can resolve permission or disk space issues.

#### Acceptance Criteria

1. IF directory creation fails due to permissions, THEN THE Kata_Generator SHALL throw an error with permission details
2. IF file writing fails, THEN THE Kata_Generator SHALL throw an error with file path and reason
3. IF the workspace root is not writable, THEN THE Kata_Generator SHALL throw an error before attempting any operations

### Requirement 14: Test Organization

**User Story:** As a developer, I want tests organized logically, so that I can understand test coverage at a glance.

#### Acceptance Criteria

1. THE Test_Suite SHALL use describe blocks to group related tests
2. THE Test_Suite SHALL use it blocks for individual test cases
3. THE Test_Suite SHALL follow Arrange-Act-Assert structure within each test
4. THE Test_Suite SHALL have no interdependencies between tests
5. WHEN tests run, THEN each test SHALL execute independently

### Requirement 15: Template Generation

**User Story:** As a developer, I want generated templates to provide a starting point, so that I can focus on TDD practice rather than boilerplate.

#### Acceptance Criteria

1. WHEN generating an implementation template, THE Kata_Generator SHALL create a valid TypeScript file
2. WHEN generating a test template, THE Kata_Generator SHALL create a valid Vitest test file
3. THE generated test template SHALL include necessary imports
4. THE generated test template SHALL include at least one example test
5. THE generated implementation template SHALL export at least one function stub
