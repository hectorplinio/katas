import { isPalindrome } from '.';

describe('isPalindrome', () => {
  it('should return true for palindromes no passing params', () => {
    expect(isPalindrome()).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('')).toBe(true);
  });

  it('should return true for palindromes', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('')).toBe(true);
  });

  it('should return false for non-palindromes', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should handle mixed case and special characters', () => {
    expect(isPalindrome('No lemon, no melon')).toBe(true);
  });

  it('should handle single character strings', () => {
    expect(isPalindrome('a')).toBe(true);
  });
});
