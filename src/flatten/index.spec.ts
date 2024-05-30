import { flatten } from '.';

describe('flatten ', () => {
  it('Not passing input parameters', () => {
    const result = flatten();

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('Given an input params, should be flat and array from array', () => {
    const inputParams: Array<Array<number>> = [
      [1, 2, 3],
      [4, 5],
      [6, 7, 8, 9],
      [1, 17, 38, 19],
    ];
    const result = flatten(inputParams);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 17, 38, 19]);
  });
});
