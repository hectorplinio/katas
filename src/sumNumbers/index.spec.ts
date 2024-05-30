import { sumNumbers } from '.';

describe('sumNumbers', () => {
  it('Not passing input parameters', () => {
    const sum = sumNumbers();
    expect(sum).toEqual(15);
  });

  it('Given an input params, should be return summ of the array', () => {
    const inputParams: Array<number> = [1, 2, 3, 4, 1, 5, 15, 5];
    const sum = sumNumbers(inputParams);

    expect(sum).toEqual(36);
  });
});
