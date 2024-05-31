import { convertToGroupedObject, KeyValueObject } from '.';

describe('convertToGroupedObject', () => {
  it('should group values by keys from the default array', () => {
    const result = convertToGroupedObject();

    expect(result).toEqual({
      fruit: ['apple', 'banana', 'orange'],
      vegetable: ['carrot', 'broccoli'],
    });
  });

  it('should group values by keys from a given array', () => {
    const inputParams: KeyValueObject[] = [
      { category: 'electronic', item: 'laptop' },
      { category: 'furniture', item: 'chair' },
      { category: 'electronic', item: 'phone' },
    ];
    const result = convertToGroupedObject(inputParams);

    expect(result).toEqual({
      electronic: ['laptop', 'phone'],
      furniture: ['chair'],
    });
  });

  it('should group values by keys from a given array without duplicates', () => {
    const inputParams: KeyValueObject[] = [
      { category: 'fruit', item: 'apple' },
      { category: 'fruit', item: 'banana' },
      { category: 'fruit', item: 'apple' },
      { category: 'fruit', item: 'apple' },
      { category: 'vegetable', item: 'carrot' },
    ];
    const result = convertToGroupedObject(inputParams);

    expect(result).toEqual({
      fruit: ['apple', 'banana'],
      vegetable: ['carrot'],
    });
  });
});
