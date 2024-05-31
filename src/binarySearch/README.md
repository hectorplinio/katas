# Kata 19: binarySearch

## Exercise Statement

Given a sorted array of integers and a target value, write a function to search for the target in the array. If the target exists, return its index. Otherwise, return -1.

### Input

A sorted array of integers and a target value.

### Example

```typescript
const initialObject: Array<number> = [2, 7, 11, 15];
const targetDefault = 9;
```

### Output

The index of the target value if found, otherwise -1.

```typescript
3;
```

### Solution

The function binarySearch performs binary search on a sorted array.

### Code

```typescript
export const binarySearch = (
  nums: number[] = initialObject,
  target: number = targetDefault,
): number => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
```

### Explanation

The function binarySearch performs the following steps:

- Parameters: Takes an array of numbers (nums) and an integer (target).
- Initialize Pointers: Uses two pointers, left starting at 0 and right at nums.length - 1.
- Binary Search Loop:
  - Calculates the middle index mid.
  - Compares nums[mid] with target:
    - If equal, returns mid.
    - If nums[mid] is less than target, moves left to mid + 1.
    - If nums[mid] is greater than target, moves right to mid - 1.
- Return: If the target is not found, returns -1.
