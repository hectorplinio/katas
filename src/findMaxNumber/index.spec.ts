import { findMaxNumber } from '.';

describe('findMaxNumber', () => {
  it('No input params, should return max number of default array', () => {
    const maxNumber = findMaxNumber();
    expect(maxNumber).toEqual(5);
  });

  it('Given an input array, should return the max number', () => {
    const inputParams: Array<number> = [10, 20, 30, 40, 50];
    const maxNumber = findMaxNumber(inputParams);
    expect(maxNumber).toEqual(50);
  });

  it('Given an input array with negative numbers, should return the max number', () => {
    const inputParams: Array<number> = [-10, -20, -30, -5];
    const maxNumber = findMaxNumber(inputParams);
    expect(maxNumber).toEqual(-5);
  });
});
