# Kata 16: isPalindrome

## Exercise Statement

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

### Input

A string.

### Example

```typescript
const inputString: string = 'A man, a plan, a canal: Panama';
```

### Output

A boolean value indicating whether the input string is a palindrome.

### Solution

The function isPalindrome takes a string as input and returns a boolean indicating whether it is a palindrome.

### Code

```typescript
export function isPalindrome(s: string): boolean {
  const cleaned = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
```

### Explanation

The function isPalindrome performs the following steps:

- Parameters: Takes a string (s).
- Cleaned String: Removes non-alphanumeric characters and converts to lower case.
- Two-Pointer Technique: Uses two pointers to check characters from both ends.
- Return: Returns true if the string is a palindrome, otherwise false.
