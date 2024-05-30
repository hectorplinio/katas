import { filterEvenNumbers } from '.';

describe('filterEvenNumbers', () => {
  it('Not passing input parameters', () => {
    const evenNumbers = filterEvenNumbers();
    expect(evenNumbers).toEqual([2, 4, 6, 8, 4, 2]);
  });

  it('Given an input params, should be return array with even numbers', () => {
    const inputParams: Array<number> = [1, 2, 3, 4, 1, 5, 15, 5];
    const evenNumbers = filterEvenNumbers(inputParams);

    expect(evenNumbers).toEqual([2, 4]);
  });
});
