# Katas Exercises

## Table of contents

- [Katas Exercises](#katas-exercises)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [Usage](#usage)
    - [Kata 1: extractBookNameFromArray](#kata-1-extractbooknamefromarray)
    - [Kata 2: sumNumbersFromArray](#kata-2-sumnumbersfromarray)
    - [Kata 3: findMaxNumberFromArray](#kata-3-findmaxnumberfromarray)
  - [Development](#development)
    - [Style guide](#style-guide)
    - [Testing](#testing)
      - [Running tests](#running-tests)
  - [After finishing a task](#after-finishing-a-task)

## Getting started

1. First, clone the repo and install the dependencies,

   ```
   npm install
   ```

   Keep in mind that we use `npm` for managing Node packages. If you try installing the dependencies with `yarn`, it will generate a `yarn-lock` file that will likely cause problems with the existing `package-lock.json`.

## Usage

This repository contains three exercises implemented in TypeScript using Node.js. Below are the details for each exercise and the necessary commands to run each one and their respective tests.

### Kata 1: extractBookNameFromArray

This exercise extracts all book names from an array of people, each with their own array of books.

For more details, please refer to the [README](src/extractBookNameFromArray/README.md) inside the `src/extractBookNameFromArray` directory.

### Kata 2: sumNumbersFromArray

This exercise sums all numbers in an array and returns the total.

For more details, please refer to the [README](src/sumNumbersFromArray/README.md) inside the `src/sumNumbersFromArray` directory.

### Kata 3: findMaxNumberFromArray

This exercise finds and returns the maximum number in an array of numbers.

For more details, please refer to the [README](src/findMaxNumberFromArray/README.md) inside the `src/findMaxNumberFromArray` directory.

## Development

### Style guide

Before submitting a patch, please make sure that the code is formatted executing this command:

```
npm run format
```

### Testing

Testing is crucial for us and we strive for high coverage of our code.

We encourage you to write tests for every functionality you build and also update the existing ones if they need to.

#### Running tests

Before running the test, install the needed dependencies:

```
npm install
```

Execute all tests with:

To run the tests we need to run this script

```
npm run test
```

## After finishing a task

Before pushing your changes, make sure you run the linter and prettier to ensure the code follows the rules, or the CI pipeline will throw an error and fail:

```
npm run lint
npm run format
```
