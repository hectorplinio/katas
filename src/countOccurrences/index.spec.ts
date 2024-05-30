import { countOccurrences } from '.';

describe('countOccurrences', () => {
  it('Not passing input parameters', () => {
    const sum = countOccurrences();
    expect(sum).toEqual({ apple: 3, banana: 2, orange: 1 });
  });

  it('Given an input params, should be return  how many times a fruit has been repeated', () => {
    const inputParams: Array<string> = [
      'apple',
      'banana',
      'apple',
      'orange',
      'banana',
      'apple',
      'grappes',
      'apple',
      'banana',
      'apple',
      'orange',
      'banana',
      'apple',
      'grappes',
      'orange',
    ];
    const sum = countOccurrences(inputParams);

    expect(sum).toEqual({ apple: 6, banana: 4, orange: 3, grappes: 2 });
  });
});
