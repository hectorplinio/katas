# Kata 7: mergeObjectsInArray

## Exercise Statement

Given an array of objects, combine all the properties into a single object.

### Input

An array of objects, where each object contains key-value pairs.

### Example

```typescript
const initialObject: Array<Record<string, string | number>> = [
  { name: 'John', surname: 'Doe' },
  { age: 21, birth: '22/01/2000' },
  { phone: '123456789', country: 'Spain' },
];
```

### Output

A single object that combines all the key-value pairs from the input array of objects.

### Solution

The function mergeObjectsInArray takes an array of objects as input and returns a single combined object. The function uses the reduce method to merge all the objects into one.

### Code

```typescript
export const mergeObjectsInArray = (
  inputParams: Array<Record<string, string | number>> = initialObject,
): Record<string, string | number> => {
  const finalObject = inputParams.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {});

  return finalObject;
};
```

### Explanation

The function mergeObjectsInArray performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method on the inputParams array.
  - acc (accumulator) is initialized as an empty object {}.
  - For each obj in the array, it merges the properties of obj into acc using the spread operator (...).
- Return: It returns the accumulated object which is the combination of all properties from the input array.
