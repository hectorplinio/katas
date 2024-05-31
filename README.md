# Katas Exercises

## Table of contents

- [Katas Exercises](#katas-exercises)
  - [Table of contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [Usage](#usage)
    - [Kata 1: extractBookNames](#kata-1-extractBookNames)
    - [Kata 2: sumNumbers](#kata-2-sumNumbers)
    - [Kata 3: findMaxNumber](#kata-3-findMaxNumber)
    - [Kata 4: countOccurrences](#kata-4-countOccurrences)
    - [Kata 5: flatten](#kata-5-flatten)
    - [Kata 6: filterEvenNumbers](#kata-6-filterEvenNumbers)
    - [Kata 7: mergeObjectsInArray](#kata-7-mergeObjectsInArray)
    - [Kata 8: filterObjects](#kata-8-filterobjects)
    - [Kata 9: simulateFishGrowth](#kata-9-simulatefishgrowth)
    - [Kata 10: uniqueValues](#kata-10-uniquevalues)
    - [Kata 11: keyValuePairsToObject](#kata-11-keyvaluepairstoobject)
    - [Kata 12: arrayOfKeyValueObjectsToObject](#kata-12-arrayofkeyvalueobjectstoobject)
    - [Kata 13: convertToGroupedObject](#kata-13-converttogroupedobject)
    - [Kata 14: countValueFrequency](#kata-14-countValueFrequency)
    - [Kata 15: twoSum](#kata-15-twoSum)
    - [Kata 16: isPalindrome](#kata-16-isPalindrome)
    - [Kata 17: fizzBuzz](#kata-17-fizzBuzz)
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

### Kata 1: extractBookNames

This exercise extracts all book names from an array of people, each with their own array of books.

For more details, please refer to the [README](src/extractBookNames/README.md) inside the `src/extractBookNames` directory.

### Kata 2: sumNumbers

This exercise sums all numbers in an array and returns the total.

For more details, please refer to the [README](src/sumNumbers/README.md) inside the `src/sumNumbers` directory.

### Kata 3: findMaxNumber

This exercise finds and returns the maximum number in an array of numbers.

For more details, please refer to the [README](src/findMaxNumber/README.md) inside the `src/findMaxNumber` directory.

### Kata 4: countOccurrences

This exercise counts how many times each string appears in an array and returns an object with the counts.

For more details, please refer to the [README](src/countOccurrences/README.md) inside the `src/countOccurrences` directory.

### Kata 5: flatten

This exercise flattens an array of arrays of numbers into a single array of numbers.

For more details, please refer to the [README](src/flatten/README.md) inside the `src/flatten` directory.

### Kata 6: filterEvenNumbers

This exercise filters the even numbers from an array and returns a new array containing only the even numbers.

For more details, please refer to the [README](src/filterEvenNumbers/README.md) inside the `src/filterEvenNumbers` directory.

### Kata 7: mergeObjectsInArray

This exercise combines all properties from an array of objects into a single object.

For more details, please refer to the [README](src/mergeObjectsInArray/README.md) inside the `src/mergeObjectsInArray` directory.

### Kata 8: filterObjects

This exercise combines all properties from an array of objects into a single object.

For more details, please refer to the [README](src/filterObjects/README.md) inside the `src/filterObjects` directory.

### Kata 9: simulateFishGrowth

This exercise simulates the growth of a school of lanternfish over a given number of days based on their reproduction cycle.

For more details, please refer to the [README](src/simulateFishGrowth/README.md) inside the `src/simulateFishGrowth` directory.

### Kata 10: uniqueValues

This exercise creates a new array that only contains unique values from a given array.

For more details, please refer to the [README](src/uniqueValues/README.md) inside the `src/uniqueValues` directory.

### Kata 11: keyValuePairsToObject

This exercise creates an object from an array of key-value pairs.

For more details, please refer to the [README](src/keyValuePairsToObject/README.md) inside the `src/keyValuePairsToObject` directory.

### Kata 12: arrayOfKeyValueObjectsToObject

This exercise converts an array of objects where each object has a single key-value pair into a single object.

For more details, please refer to the [README](src/arrayOfKeyValueObjectsToObject/README.md) inside the `src/arrayOfKeyValueObjectsToObject` directory.

### Kata 13: convertToGroupedObject

This exercise converts an array of objects where each object has a key and a value into a single object where the keys are the unique values of the original keys and the values are arrays of the associated values.

For more details, please refer to the [README](src/convertToGroupedObject/README.md) inside the `src/convertToGroupedObject` directory.

### Kata 14: countValueFrequency

This exercise counts how many times each value of a specific property appears in an array of objects.

For more details, please refer to the [README](src/countValueFrequency/README.md) inside the `src/countValueFrequency` directory.

### Kata 15: twoSum

This exercise finds indices of two numbers in an array that add up to a given target.

For more details, please refer to the [README](src/twoSum/README.md) inside the `src/twoSum` directory.

### Kata 16: isPalindrome

This exercise checks if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.

For more details, please refer to the [README](src/isPalindrome/README.md) inside the `src/isPalindrome` directory.

### Kata 17: fizzBuzz

This exercise outputs the FizzBuzz representation of numbers from 1 to a given integer.

For more details, please refer to the [README](src/fizzBuzz/README.md) inside the `src/fizzBuzz` directory.

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
