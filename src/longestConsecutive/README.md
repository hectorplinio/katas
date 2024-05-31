# Kata 20: longestConsecutive

## Exercise Statement

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

### Input

An array of numbers.

### Example

```typescript
const initialObject: Array<number> = [2, 7, 11, 15];
```

### Output

A single number representing the length of the longest consecutive elements sequence.

### Solution

The function longestConsecutive takes an array of numbers and returns the length of the longest consecutive elements sequence.

### Code

```typescript
export const longestConsecutive = (nums: number[] = initialObject): number => {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
```

### Explanation

The function longestConsecutive performs the following steps:

- Parameters: Takes an array of numbers (nums).
- Set: Converts the array to a set to remove duplicates and allow O(1) lookups.
- Loop: Iterates through each number in the set:
  -Checks if it's the start of a sequence.
  - If it is, counts the length of the sequence.
- Return: Returns the length of the longest sequence found.
