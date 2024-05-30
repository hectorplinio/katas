import { uniqueValues } from '.';

describe('uniqueValues', () => {
  it('should return unique values from the default array', () => {
    const result = uniqueValues();
    expect(result).toEqual([1, 2, 3, 4, 5, 41]);
  });

  it('should return unique values from a given array', () => {
    const inputParams: number[] = [5, 6, 6, 7, 8, 8, 9];
    const result = uniqueValues(inputParams);
    expect(result).toEqual([5, 6, 7, 8, 9]);
  });
});
