const initialObject: Array<number> = [2, 7, 11, 15];
const targetDefault = 9;

export const twoSum = (
  nums: number[] = initialObject,
  target: number = targetDefault,
): number[] => {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
};
