# Kata 15: twoSum

## Exercise Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

### Input

An array of numbers.
A target.

### Example

```typescript
const initialObject: Array<number> = [2, 7, 11, 15];
const targetDefault = 9;
```

### Output

An array containing the indices of the two numbers that add up to the target.

### Solution

The function twoSum takes an array of numbers and a target value, then returns the indices of the two numbers that add up to the target.

### Code

```typescript
export function twoSum(
  nums: number[] = initialObject,
  target: number = targetDefault,
): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}
```

### Explanation

The function twoSum performs the following steps:

- Parameters: Takes an array of numbers (nums) and an integer (target).
- Map: Uses a map to store the indices of the numbers.
- Loop: Iterates through the array, checks if the complement exists in the map.
- Return: Returns the indices if a match is found, otherwise continues.
