import { isAnagram } from '.';

describe('isAnagram', () => {
  it('should return true for anagrams without params', () => {
    expect(isAnagram()).toBe(true);
  });

  it('should return true for anagrams', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('should return false for non-anagrams', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('should handle different lengths', () => {
    expect(isAnagram('a', 'ab')).toBe(false);
  });

  it('should handle empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });
});
