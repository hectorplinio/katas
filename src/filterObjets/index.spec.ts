import { filterObjets } from '.';

describe('filterObjets', () => {
  it('should return a combined object from default array', () => {
    const result = filterObjets(undefined, 'fruit');
    expect(result).toEqual([
      { name: 'apple', category: 'fruit' },
      { name: 'banana', category: 'fruit' },
    ]);
  });

  it('should return a combined object from given input array', () => {
    const inputParams: Record<string, string>[] = [
      { name: 'apple', category: 'fruit' },
      { name: 'carrot', category: 'vegetable' },
      { name: 'banana', category: 'fruit' },
      { name: 'broccoli', category: 'vegetable' },
    ];
    const result = filterObjets(inputParams, 'vegetable');
    expect(result).toEqual([
      { name: 'carrot', category: 'vegetable' },
      { name: 'broccoli', category: 'vegetable' },
    ]);
  });
});
