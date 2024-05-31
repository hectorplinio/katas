# Kata 10: uniqueValues

## Exercise Statement

Given an array, create a new array that only contains unique values.

### Input

An array of numbers.

### Example

```typescript
const initialObject: number[] = [1, 2, 2, 3, 4, 4, 5, 41];
```

### Output

A new array with only unique values.

```typescript
[1, 2, 3, 4, 5, 41];
```

### Solution

The function uniqueValues takes an array of numbers as input and returns a new array containing only unique values. It uses the Set object to filter out duplicates.

### Code

```typescript
export const uniqueValues = (
  inputParams: number[] = initialObject,
): number[] => {
  const uniqueNumbers = [...new Set(inputParams)];
  return uniqueNumbers;
};
```

### Explanation

The function uniqueValues performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Set Object: It uses the Set object to create a new array with only unique values.
- Return: It returns the new array containing only unique values.
