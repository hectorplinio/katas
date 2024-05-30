import { findMaxNumberFromArray } from '.';

describe('findMaxNumberFromArray', () => {
  it('No input params, should return max number of default array', () => {
    const maxNumber = findMaxNumberFromArray();
    expect(maxNumber).toEqual(5);
  });

  it('Given an input array, should return the max number', () => {
    const inputParams: Array<number> = [10, 20, 30, 40, 50];
    const maxNumber = findMaxNumberFromArray(inputParams);
    expect(maxNumber).toEqual(50);
  });

  it('Given an input array with negative numbers, should return the max number', () => {
    const inputParams: Array<number> = [-10, -20, -30, -5];
    const maxNumber = findMaxNumberFromArray(inputParams);
    expect(maxNumber).toEqual(-5);
  });
});
