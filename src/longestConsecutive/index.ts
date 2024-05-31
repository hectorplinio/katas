const initialObject: Array<number> = [2, 7, 11, 15];

export const longestConsecutive = (nums: number[] = initialObject): number => {
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
