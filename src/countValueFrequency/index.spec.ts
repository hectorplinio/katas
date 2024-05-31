import { countValueFrequency, KeyValueObject } from '.';

describe('countValueFrequency', () => {
  it('should count the frequency of values for the default array and "category" key', () => {
    const result = countValueFrequency();

    expect(result).toEqual({
      apple: 1,
      banana: 2,
      carrot: 1,
      broccoli: 1,
      orange: 1,
    });
  });

  it('should count the frequency of values for the default array and "item" key', () => {
    const inputParams: KeyValueObject[] = [
      { item: 'apple' },
      { item: 'banana' },
      { item: 'carrot' },
      { item: 'broccoli' },
      { item: 'orange' },
      { item: 'banana' },
      { item: 'carrot' },
      { item: 'broccoli' },
      { item: 'orange' },
      { item: 'apple' },
      { item: 'banana' },
    ];
    const result = countValueFrequency(inputParams);

    expect(result).toEqual({
      apple: 2,
      banana: 3,
      carrot: 2,
      broccoli: 2,
      orange: 2,
    });
  });

  it('should count the frequency of values for a given array and specified key', () => {
    const inputParams: KeyValueObject[] = [
      { item: 'laptop' },
      { item: 'chair' },
      { item: 'phone' },
      { item: 'laptop' },
    ];
    const result = countValueFrequency(inputParams);

    expect(result).toEqual({ laptop: 2, chair: 1, phone: 1 });
  });
});
