import { filterEvenNumberInArray } from '.';

describe('filterEvenNumberInArray', () => {
  it('Not passing input parameters', () => {
    const evenNumbers = filterEvenNumberInArray();
    expect(evenNumbers).toEqual([2, 4, 6, 8, 4, 2]);
  });

  it('Given an input params, should be return array with even numbers', () => {
    const inputParams: Array<number> = [1, 2, 3, 4, 1, 5, 15, 5];
    const evenNumbers = filterEvenNumberInArray(inputParams);

    expect(evenNumbers).toEqual([2, 4]);
  });
});
