import { simulateFishGrowth } from '.';

describe('simulateFishGrowth', () => {
  it('should simulate fish growth over 80 days with initial input', () => {
    const result = simulateFishGrowth();
    expect(result.length).toEqual(5934);
  });

  it('should simulate fish growth over 18 days with given input array', () => {
    const inputParams: Array<number> = [3, 4, 3, 1, 2];
    const result = simulateFishGrowth(inputParams, 18);
    expect(result.length).toEqual(26);
  });
});
