import { binarySearch } from '.';

describe('binarySearch', () => {
  it('should return the correct index if the target is found without params', () => {
    expect(binarySearch()).toBe(-1);
  });

  it('should return the correct index if the target is found', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  });

  it('should return -1 if the target is not found', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 7)).toBe(-1);
  });

  it('should handle empty arrays', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  it('should handle arrays with one element', () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
  });

  it('should handle arrays with negative numbers', () => {
    expect(binarySearch([-5, -3, -1, 0, 2, 4], -3)).toBe(1);
  });
});
