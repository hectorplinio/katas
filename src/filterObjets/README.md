# Kata 8: filterObjects

## Exercise Statement

Given an array of objects, filter the objects based on a specified category and return an array of objects that match the category.

### Input

1. An array of objects, where each object contains key-value pairs.
2. A string representing the category to filter by.

### Example

```typescript
const initialObject: Record<string, string>[] = [
  { name: 'apple', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'banana', category: 'fruit' },
  { name: 'broccoli', category: 'vegetable' },
];
const filterParam: string = 'fruit';
```

### Output

An array of objects that match the specified category.

### Solution

The function filterObjects takes an array of objects and a category string as input and returns an array of objects that match the category. The function uses the filter method to filter the objects based on the specified category.

### Code

```typescript
export const filterObjects = (
  inputParams: Record<string, string>[] = initialObject,
  filterParam: string,
): Record<string, string>[] => {
  const inputParamsFiltered = inputParams.filter(
    (object) => object.category === filterParam,
  );

  return inputParamsFiltered;
};
```

### Explanation

The function filterObjects performs the following steps:

- Parameters: It takes two parameters:
  - inputParams (optional) which defaults to initialObject.
  - filterParam which is a string representing the category to filter by.
    -Filter Method: It uses the filter method on the inputParams array.
  - For each object in the array, it checks if the object.category matches filterParam.
  - If the condition is true, the object is included in the filtered array.
- Return: It returns the filtered array of objects that match the specified category.
