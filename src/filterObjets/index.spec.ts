import { filterObjects, InputParams } from '.';

describe('filterObjects', () => {
  it('should return a combined object from default array', () => {
    const result = filterObjects(undefined, 'fruit');
    expect(result).toEqual([
      { name: 'apple', data: { category: 'fruit', quantity: 1 } },
      { name: 'banana', data: { category: 'fruit', quantity: 3 } },
    ]);
  });

  it('should return a combined object from given input array', () => {
    const inputParams: InputParams[] = [
      { name: 'apple', data: { category: 'fruit', quantity: 1 } },
      { name: 'carrot', data: { category: 'vegetable', quantity: 5 } },
      { name: 'banana', data: { category: 'fruit', quantity: 3 } },
      { name: 'broccoli', data: { category: 'vegetable', quantity: 6 } },
      { name: 'orange', data: { category: 'fruit', quantity: 0 } },
    ];
    const result = filterObjects(inputParams, 'vegetable');
    expect(result).toEqual([
      { name: 'carrot', data: { category: 'vegetable', quantity: 5 } },
      { name: 'broccoli', data: { category: 'vegetable', quantity: 6 } },
    ]);
  });
});
