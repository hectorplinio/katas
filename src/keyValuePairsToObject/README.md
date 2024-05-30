# Kata 3: keyValuePairsToObject

## Exercise Statement

Given an array of key-value pairs, create an object.

### Input

An array of key-value pairs.

### Example

```typescript
type KeyValuePair = [string, string | number];

const initialObject: KeyValuePair[] = [
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'New York'],
];
```

### Output

An object created from the key-value pairs.

### Solution

The function keyValuePairsToObject takes an array of key-value pairs as input and returns an object. It uses the reduce method to achieve this.

### Code

```typescript
export const keyValuePairsToObject = (
  inputParams: KeyValuePair[] = initialObject,
): Record<string, string | number> => {
  const obj = inputParams.reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string | number>,
  );
  return obj;
};
```

### Explanation

The function keyValuePairsToObject performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method to create an object from the key-value pairs.
- Return: It returns the created object.
