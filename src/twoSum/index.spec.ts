import { twoSum } from '.';

describe('twoSum', () => {
  it('should return indices of the two numbers that add up to the target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    expect(twoSum()).toEqual([0, 1]);
  });

  it('should handle negative numbers', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  it('should handle numbers with duplicates', () => {
    expect(twoSum([1, 5, 1, 5], 10)).toEqual([1, 3]);
  });

  it('should return an empty array if no solution is found', () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });
});
