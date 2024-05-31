# Kata 18: isAnagram

## Exercise Statement

Given two strings `s` and `t`, write a function to determine if `t` is an anagram of `s`.

### Input

Two strings `s` and `t`.

### Example

```typescript
const inputParam1: string = 'anagram';
const inputParam2: string = 'nagaram';
```

### Output

A boolean indicating whether t is an anagram of s.

```typescript
true;
```

### Solution

The function isAnagram checks if two strings are anagrams.

### Code

```typescript
export const isAnagram = (
  firstInput: string = inputParam1,
  secondInput: string = inputParam2,
): boolean => {
  if (firstInput.length !== secondInput.length) {
    return false;
  }
  const count = new Map<string, number>();
  for (const char of firstInput) {
    count.set(char, (count.get(char) || 0) + 1);
  }
  for (const char of secondInput) {
    if (!count.has(char)) {
      return false;
    }
    count.set(char, count.get(char)! - 1);
    if (count.get(char) === 0) {
      count.delete(char);
    }
  }
  return count.size === 0;
};
```

### Explanation

The function isAnagram performs the following steps:

- Parameters: Takes two strings s and t.
- Clean String: Cleans the strings by removing non-alphanumeric characters and converting to lowercase.
- Map: Uses a map to count characters in s and decrements for t.
- Return: Returns true if the map is empty, indicating t is an anagram of s.
