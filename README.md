# Singlish to Sinhala Translation Testing

A comprehensive Playwright-based automated testing suite for validating Singlish to Sinhala Unicode translation functionality. This project provides extensive test coverage across 40 test cases, covering various sentence structures, edge cases, and user interface scenarios.

## Table of Contents

- [Project Overview](#project-overview)
- [Test Coverage](#test-coverage)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Viewing Test Reports](#viewing-test-reports)
- [Test Case Categories](#test-case-categories)
- [Project Structure](#project-structure)
- [Configuration](#configuration)

## Project Overview

This testing framework validates the translation of romanized Sinhala (Singlish) text to proper Sinhala Unicode script on [SwiftTranslator](https://www.swifttranslator.com/). The automated test suite ensures translation accuracy, handles edge cases, and validates user interface behavior across different scenarios.

### Key Features

- 40 comprehensive test cases covering multiple scenarios
- Automated browser testing using Playwright
- Support for Chromium, Firefox, and WebKit browsers
- Detailed HTML test reports with pass/fail metrics
- Parallel test execution for faster results
- Network idle state validation for accurate output capture

## Test Coverage

The test suite includes 40 meticulously designed test cases distributed across three categories:

### Positive Functional Tests (30 cases)
- **Simple Sentences**: Daily activities, requests, greetings, and common expressions
- **Complex Sentences**: Compound sentences, conditional statements, cause-effect relationships
- **Interrogative Forms**: Questions with various sentence structures
- **Imperative Sentences**: Commands, instructions, and polite requests
- **Mixed Language Inputs**: English technical terms, place names, abbreviations (e.g., Zoom, Kandy, PIN)
- **Special Formatting**: Currency (Rs.), time formats (7.30 AM), line breaks, multiple spaces
- **Long Text**: Multi-paragraph news reports and extended content
- **Future and Negative Tenses**: Various grammatical structures

### Negative Functional Tests (10 cases)
- Joined words without proper spacing
- Mixed symbols and words
- Informal slang and colloquialisms
- Incomplete grammar structures
- Excessive or incorrect punctuation
- Incorrect negation patterns
- Incomplete sentences

### UI Tests (2 cases)
- Long text scrolling behavior
- Multiline input handling

### Test Lengths
- **S (Short)**: Quick single-sentence translations
- **M (Medium)**: Multi-clause or compound sentences
- **L (Long)**: Paragraphs and extended text

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Weerasinghe2277/IT23714052.git
cd IT23714052
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install Playwright Browsers

```bash
npx playwright install
```

This will download and install Chromium, Firefox, and WebKit browsers required for testing.

## Running Tests

### Execute All Tests

```bash
npx playwright test
```

### Run Tests with Visible Browser (Headed Mode)

```bash
npx playwright test --headed
```

### Run Specific Test File

```bash
npx playwright test tests/singlish_english.spec.js
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### Run Tests on Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run a Single Test Case

```bash
npx playwright test -g "Pos_Fun_0001"
```

## Viewing Test Reports

After test execution, generate and view the HTML report:

```bash
npx playwright show-report
```

The report includes:
- Pass/fail status for each test
- Execution time
- Screenshots on failure
- Detailed error messages
- Test categorization

## Test Case Categories

Test cases are organized with standardized ID prefixes:

| Prefix | Category | Description |
|--------|----------|-------------|
| **Pos_Fun** | Positive Functional | Valid inputs expecting correct translation |
| **Neg_Fun** | Negative Functional | Invalid/edge case inputs testing error handling |
| **Pos_UI** | Positive UI | User interface behavior validation |
| **Neg_UI** | Negative UI | UI stress and edge case testing |

### Sample Test Cases

**Pos_Fun_0001**: Convert simple daily sentence
- Input: `mama kaeema kanavaa.`
- Expected: `මම කෑම කනවා.`

**Pos_Fun_0021**: Convert mixed English technical term
- Input: `Zoom lecture ekak thiyenavaa.`
- Expected: `Zoom lecture එකක් තියෙනවා.`

**Neg_Fun_0001**: Fail on joined food request sentence
- Input: `matafriedriceonee`
- Expected: Should fail gracefully

## Project Structure

```
IT23714052/
├── tests/
│   ├── singlish_english.spec.js    # Main translation test suite (40 cases)
│   ├── example.spec.js              # Example test file
│   └── debug.spec.js                # Debug tests
├── playwright-report/               # Generated HTML test reports
│   ├── index.html                   # Main report file
│   └── data/                        # Test execution data
├── test-results/                    # Individual test result artifacts
│   └── [test-name]/                 # Screenshots and error context
├── playwright.config.js             # Playwright configuration
├── package.json                     # Project dependencies
└── README.md                        # Project documentation
```

## Configuration

### Playwright Configuration

Test behavior can be customized in [playwright.config.js](playwright.config.js):

**Key Settings:**
- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled for faster test runs
- **Retries**: 2 retries on CI, 0 locally
- **Reporter**: HTML report generation
- **Browsers**: Chromium, Firefox, WebKit (desktop and mobile viewports)
- **Timeouts**: Configurable per test length (3s for short, 5s for long)

### Customizing Wait Times

Tests include intelligent wait times based on content length:
- Short (S): 3000ms
- Medium (M): 3000ms
- Long (L): 5000ms

Modify these in the test file if translation speeds vary.

## Test Execution Flow

1. Navigate to SwiftTranslator website
2. Wait for network idle state
3. Clear and fill input textarea
4. Wait for translation (length-based timeout)
5. Capture output from result area
6. Validate against expected translation
7. Log results with pass/fail status

## Contributing

This is a personal academic project for testing purposes. The test suite is designed for the Singlish to Sinhala translation feature of SwiftTranslator.

## License

ISC
