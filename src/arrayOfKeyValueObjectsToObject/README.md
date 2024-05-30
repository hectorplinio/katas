# Kata 12: arrayOfKeyValueObjectsToObject

## Exercise Statement

Given an array of objects where each object has a single key and value, convert it into a single object.

### Input

An array of objects with single key-value pairs.

### Example

```typescript
type KeyValueObject = Record<string, string>;

const initialObject: KeyValueObject[] = [
  { '0': 'fresas' },
  { '1': 'manzanas' },
  { '2': 'plátanos' },
  { '3': 'naranjas' },
];
```

### Output

A single object created from the array of key-value objects.

### Solution

The function arrayOfKeyValueObjectsToObject takes an array of objects as input and returns a single object. It uses the reduce method to achieve this.

### Code

```typescript
export const arrayOfKeyValueObjectsToObject = (
  inputParams: KeyValueObject[] = initialObject,
): Record<string, string> => {
  const obj = inputParams.reduce(
    (acc, item) => {
      const key = Object.keys(item)[0];
      acc[key] = item[key];
      return acc;
    },
    {} as Record<string, string>,
  );
  return obj;
};
```

### Explanation

The function arrayOfKeyValueObjectsToObject performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method to create a single object from the array of key-value objects.
- Return: It returns the created object.
