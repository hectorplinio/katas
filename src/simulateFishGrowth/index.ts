const initialObject: Array<number> = [3, 4, 3, 1, 2];

export const simulateFishGrowth = (
  inputParams: Array<number> = initialObject,
  totalDays: number = 80,
): Array<number> => {
  let fishTimers = [...inputParams];

  for (let day = 0; day < totalDays; day++) {
    fishTimers = fishTimers.reduce((acc, timer) => {
      if (timer === 0) {
        acc.push(6, 8);
      } else {
        acc.push(timer - 1);
      }
      return acc;
    }, [] as Array<number>);
  }

  return fishTimers;
};
